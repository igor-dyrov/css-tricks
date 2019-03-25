const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack/webpack.config.js');
const path = require('path');

const sourcePath = path.join(__dirname, 'src/');

module.exports = merge(common, {
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: sourcePath,
		port: 3000,
		publicPath: 'http://localhost:3000/dist/',
		hotOnly: true
	},
});
