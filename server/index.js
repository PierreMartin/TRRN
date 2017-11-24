import express from 'express';
import next from 'next';
// import { connect } from './db';
// import initPassport from './init/passport';
import initExpress from './init/express';
import initRoutesApi from './init/routesApi';
import initRoutesUrl from './init/routesUrl';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './app', dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express();

		// connect to MongoDB using mongoose - register mongoose Schema
		/* connect(); */

		// For auth
		/* initPassport(); */

		// Bootstrap application settings
		initExpress(server);

		// Note: Some of these routes have passport and database model dependencies
		initRoutesUrl(server, app);
		initRoutesApi(server);

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(server.get('port'), (err) => {
			if (err) throw err;
			console.log(`==> Open up http://localhost:${server.get('port')}/ in your browser.`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
