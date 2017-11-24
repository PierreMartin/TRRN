import bodyParser from 'body-parser';

const dev = process.env.NODE_ENV !== 'production';

export default (server) => {
	server.set('port', (process.env.PORT || 3000));
	server.use(bodyParser.json());

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
	server.set('trust proxy', 'loopback');

	console.log('--------------------------');
	console.log('===>  Starting Server . . .');
	console.log(`===>  Environment dev: ${dev}`);
	console.log(`===>  Listening on port: ${server.get('port')}`);
	console.log('--------------------------');

	// server.use(passport.initialize());
	// server.use(passport.session());
	// server.use(flash());
};
