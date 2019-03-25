const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sourcePath = path.join(__dirname, 'src/');
const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
	context: sourcePath,
	entry: './index.jsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components|server)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] }
			},
			{
				test: /\.css$/,
				use: extractCSS.extract([
					'css-loader',
					'postcss-loader'
				])
			}
		]
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: sourcePath,
		port: 3000,
		publicPath: 'http://localhost:3000/dist/',
		hotOnly: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		extractCSS,
		new CopyWebpackPlugin([{
			from: 'index.html',
			to: 'index.html'
		}])
	]
};