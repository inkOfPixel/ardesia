const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		basic: ["./examples/basic/index.js"],
		rte: ["./examples/rte/index.js"]
	},
	output: {
		path: path.resolve(__dirname, "../examples/scripts"),
		publicPath: "http://0.0.0.0:9001/scripts/",
		filename: "[name].js",
		chunkFilename: "[id].[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel"]
			}, {
				test: /\.json$/,
				exclude: /node_modules/,
				loaders: ["json"]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development")
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ["", ".js", ".jsx", ".scss"]
	}
};
