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
const examplesConfiguration = require("./config/webpack.config.examples");
const forOwn = require("lodash/forOwn");

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

gulp.task("default", ["serve:examples"]);

gulp.task("serve:examples", () => {
	runDevServer(examplesConfiguration, "./examples/", WEBSITE_SERVER_PORT + 1);
});

gulp.task("serve:website", () => {
	runDevServer(websiteConfiguration, "./website/", WEBSITE_SERVER_PORT);
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

function runDevServer(config, contentBase, port) {
	// Start a webpack-dev-server
	forOwn(config.entry, (entryPoint) => {
		entryPoint.unshift(
			`webpack-dev-server/client?http://0.0.0.0:${port}`,
			"webpack/hot/dev-server"
		);
	});
	const compiler = webpack(config);

	const devServer = new WebpackDevServer(compiler, {
		publicPath: config.output.publicPath,
		contentBase, // "./examples/",
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
	devServer.listen(port, "0.0.0.0", function onEvent(error) {
		if (error) {
			throw new gutil.PluginError("webpack-dev-server", error);
		}
		// Server listening
		gutil.log("[webpack-dev-server]", `http://0.0.0.0:${port}/index.html`);
	});

	onProcessStop(function closeServer() {
		console.log(ANSI.YELLOW, "Closing WebpackDevServer..", ANSI.RESET);
		devServer.close();
	});
}
