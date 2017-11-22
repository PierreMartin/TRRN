module.exports = {
	webpack: config => {
		config.module.rules.push({
			test: /\.(jpe?g|png|gif|svg)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						limit: 8192,
						name: '[name].[hash:7].[ext]'
					}
				}
			]
		});

		return config;
	}
};
