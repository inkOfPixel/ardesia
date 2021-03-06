const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		bundle: ["./website/scripts/app/main.js"]
	},
	output: {
		path: path.resolve(__dirname, "../website/scripts"),
		publicPath: "http://0.0.0.0:9000/scripts/",
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
