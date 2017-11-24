import bodyParser from 'body-parser';

export default (app) => {
	app.set('port', (process.env.PORT || 3000));
	app.use(bodyParser.json());

	// I am adding this here so that the Heroku deploy will work
	// Indicates the app is behind a front-facing proxy,
	// and to use the X-Forwarded-* headers to determine the connection and the IP address of the client.
	// NOTE: X-Forwarded-* headers are easily spoofed and the detected IP addresses are unreliable.
	// trust proxy is disabled by default.
	// When enabled, Express attempts to determine the IP address of the client connected through the front-facing proxy, or series of proxies.
	// The req.ips property, then, contains an array of IP addresses the client is connected through.
	// To enable it, use the values described in the trust proxy options table.
	// The trust proxy setting is implemented using the proxy-addr package. For more information, see its documentation.
	// loopback - 127.0.0.1/8, ::1/128
	app.set('trust proxy', 'loopback');

	console.log('--------------------------');
	console.log('===>  Starting Server . . .');
	console.log(`===>  Environment: ${process.env.NODE_ENV}`);
	console.log(`===>  Listening on port: ${app.get('port')}`);
	console.log('--------------------------');

	// app.use(passport.initialize());
	// app.use(passport.session());
	// app.use(flash());
};
