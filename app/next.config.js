const path = require('path');
const glob = require('glob');

module.exports = {
	webpack: (config) => {
		config.module.rules.push(
			// CSS / SCSS :
			{
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},

			// CSS :
			{
				test: /\.css$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader']
			},

			// SASS :
			{
				test: /\.s(a|c)ss$/,
				use: ['babel-loader', 'raw-loader', 'postcss-loader',
					{ loader: 'sass-loader',
						options: {
							includePaths: ['styles', 'node_modules']
								.map((d) => path.join(__dirname, d))
								.map((g) => glob.sync(g))
								.reduce((a, c) => a.concat(c), [])
						}
					}
				]
			},

			// Images :
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: '[name].[hash:7].[ext]'
						}
					}
				]
			}
		);

		return config;
	}
};
