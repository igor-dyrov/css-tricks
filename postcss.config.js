module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: ['ie >= 8', 'last 4 version']
		}),
		require('css-mqpacker')({
			sort: true
		}),
	]
};
