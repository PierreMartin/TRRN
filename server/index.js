import express from 'express';
import next from 'next';
// import { connect } from './db';
// import initPassport from './init/passport';
import initExpress from './init/express';
import initRoutes from './init/routes';

const dev = process.env.NODE_ENV !== 'production';
const App = next({ dir: './app', dev });
const handle = App.getRequestHandler();

App.prepare()
	.then(() => {
		const app = express();

		// connect to MongoDB using mongoose - register mongoose Schema
		/* connect(); */

		// For auth
		/* initPassport(); */

		// Bootstrap application settings
		initExpress(app);

		// Note: Some of these routes have passport and database model dependencies
		initRoutes(app);

		app.get('*', (req, res) => {
			return handle(req, res);
		});

		app.listen(app.get('port'), (err) => {
			if (err) throw err;
			console.log(`==> Open up http://localhost:${app.get('port')}/ in your browser.`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
