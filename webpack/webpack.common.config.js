const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourcePath = path.join(__dirname, '../src/');
const nodeExternals = require('webpack-node-externals');
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
			// {
			// 	test: /\.(js|jsx)$/,
			// 	exclude: /(node_modules|bower_components|server)/,
			// 	use: [
			// 		'babel-loader',
			// 		'react-hot-loader/webpack',
			// 		'eslint-loader'
			// 	],
			// },
			{
				test: /\.tsx?$/,
				exclude: /(react-native)/,
				use: [
					"babel-loader",
					"react-hot-loader/webpack",
					"awesome-typescript-loader?module=es6",
				]
			},
			{
				enforce: "pre", test: /\.(ts|tsx)$/,
				exclude: /(react-native)/,
				loader: "tslint-loader"
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'resolve-url-loader',
						'sass-loader',
						'postcss-loader',
					]
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'postcss-loader'
					]
				})
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
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