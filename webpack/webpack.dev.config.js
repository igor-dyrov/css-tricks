const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const common = require('./webpack.common.config.js');

const sourcePath = path.join(__dirname, 'dist/');

module.exports = merge(common, {
	mode: 'development',
	watch: true,
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: common.context,
		port: 3000,
		disableHostCheck: true,
		historyApiFallback: true,
		hotOnly: true
	},
});
