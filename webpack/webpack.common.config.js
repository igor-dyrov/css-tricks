const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourcePath = path.join(__dirname, '../src/');
const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
	entry: {
		'app': [
			'react-hot-loader/patch',
			'./index.tsx'
		]
	},
	context: sourcePath,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components|server)/,
				use: [
					'babel-loader',
					'react-hot-loader/webpack',
					'eslint-loader'
				],
			},
			{
				test: /\.tsx?$/,
				use: [
					"react-hot-loader/webpack",
					"awesome-typescript-loader?module=es6",
				]
			},
			{
				enforce: "pre", test: /\.(ts|tsx)$/,
				loader: "tslint-loader"
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'resolve-url-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							query: {
								modules: true,
								sourceMap: true,
							}
						}
					]
				})
			}
		]
	},
	resolve: { extensions: ['*', '.js', '.jsx', '.tsx', '.ts'] },
	output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({ template: 'index.html' }),
		extractCSS,
	]
};