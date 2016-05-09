const path = require("path");
const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		bundle: ["./source/App.jsx"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "http://0.0.0.0:9000/build/",
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
			}, {
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
				// ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader")
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development")
		}),
		// new ExtractTextPlugin("[name].css", {
		// 	allChunks: true
		// }),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ["", ".js", ".jsx", ".scss"]
	}
};
