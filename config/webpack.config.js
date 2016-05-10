const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	target: "node",
	entry: {
		ardesia: ["./source/components/index.js"]
	},
	output: {
		path: path.resolve(__dirname, "../lib"),
		filename: "ardesia.min.js",
		chunkFilename: "[id].[name].js",
		library: "Ardesia",
		libraryTarget: "umd",
		umdNamedDefine: true
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
			}
		]
	},
	node: {
		__dirname: true,
		__filename: true
	},
	externals: [nodeExternals()],
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false
		})
	],
	resolve: {
		extensions: ["", ".js", ".jsx", ".scss"]
	}
};
