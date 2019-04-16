const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourcePath = path.join(__dirname, '../src/');
const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
	context: sourcePath,
	entry: './index.jsx',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components|server)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] }
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.css$/,
				use: extractCSS.extract([
					'css-loader',
					'postcss-loader',
					{
						loader: 'group-css-media-queries-loader',
						options: { sourceMap: true }
					}
				])
			}
		]
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({ template: 'index.html' }),
		extractCSS,
	]
};