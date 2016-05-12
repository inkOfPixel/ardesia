/**
* Copyright (c) 2016, inkOfPixel, Srl.
* All rights reserved.
*/
/* eslint no-console: ["error", { allow: ["log", "error"] }] */

const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const websiteConfiguration = require("./config/webpack.config.website");
const libConfiguration = require("./config/webpack.config.lib");

const WEBSITE_SERVER_PORT = 9000;
const AGGREGATE_CLIENT_TIMEOUT = 300;

const STOP_SIGNALS = {
	SIGTSTP: "SIGTSTP",
	SIGTERM: "SIGTERM",
	SIGINT: "SIGINT"
};

const ANSI = {
	RED: "\x1b[31m",
	GREEN: "\x1b[32m",
	YELLOW: "\x1b[33m",
	BLUE: "\x1b[34m",
	PURPLE: "\x1b[35m",
	TEAL: "\x1b[36m",
	GREY: "\x1b[37m",
	RESET: "\x1b[0m"
};

function onProcessStop(cleanUpCallback) {
	function listenToSignal(signal) {
		process.on(signal, function onSignal() {
			cleanUpCallback(signal);
			process.exit(0);
		});
	}
	Object.keys(STOP_SIGNALS).forEach(listenToSignal);
}

gulp.task("default", ["serve:website"]);

gulp.task("serve:website", function runServer() {
	// Start a webpack-dev-server
	websiteConfiguration.entry.bundle.unshift(
		`webpack-dev-server/client?http://0.0.0.0:${WEBSITE_SERVER_PORT}`,
		"webpack/hot/dev-server"
	);
	const compiler = webpack(websiteConfiguration);

	const devServer = new WebpackDevServer(compiler, {
		publicPath: websiteConfiguration.output.publicPath,
		contentBase: "./website",
		hot: true,
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: AGGREGATE_CLIENT_TIMEOUT
		},
		noInfo: true,
		lazy: false,
		stats: { colors: true },
		headers: { "Access-Control-Allow-Origin": "*" }
	});
	devServer.listen(WEBSITE_SERVER_PORT, "0.0.0.0", function onEvent(error) {
		if (error) {
			throw new gutil.PluginError("webpack-dev-server", error);
		}
		// Server listening
		gutil.log("[webpack-dev-server]", `http://0.0.0.0:${WEBSITE_SERVER_PORT}/webpack-dev-server/index.html`);
	});

	onProcessStop(function closeServer() {
		console.log(ANSI.YELLOW, "Closing WebpackDevServer..", ANSI.RESET);
		devServer.close();
	});
});

gulp.task("build:website", function buildClient(callback) {
	const compiler = webpack(websiteConfiguration);
	compiler.run(onBuild("[webpack | build]", callback));
});

gulp.task("build:lib", function buildClient(callback) {
	const compiler = webpack(libConfiguration);
	compiler.run(onBuild("[webpack | build-lib]", callback));
});

function onBuild(moduleName, done) {
	const name = typeof moduleName === "string" ? moduleName : "[webpack]";
	return (error, stats) => {
		if (error) {
			throw new gutil.PluginError(name, error);
		}
		gutil.log(name, stats.toString({
			colors: true,
			hash: false,
			version: false,
			reasons: false,
			chunks: false
		}));

		if (done) {
			done();
		}
	};
}
