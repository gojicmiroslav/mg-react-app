module.exports = {
	entry: './app/app.js',
	output: {
		path: __dirname,
		filename: './public/bundle.js' 
	},
	resolve: {
		root: __dirname,
		alias: { },
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	}	
};