var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha', 'sinon'],
		files: [
			'public/vendor/jquery/dist/jquery.js',
			'test/**/*.test.js'
		],
		preprocessors: {
			'test/**/*.test.js': ['webpack']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '5000'
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		} 		
	});
}