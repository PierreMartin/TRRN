const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './app', dev });
const handle = app.getRequestHandler();

const port = 3000;

app.prepare()
	.then(() => {
		const server = express();

		server.get('/p/:id', (req, res) => {
			const actualPage = '/post';
			const queryParams = { id: req.params.id };
			app.render(req, res, actualPage, queryParams);
		});

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, (err) => {
			if (err) throw err;
			console.log(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
