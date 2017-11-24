/**
 * This file is used for the SSR when we use 'as' in the <Link>
 * */
export default (server, app) => {
	// as={`/p/${show.id}`} href={`/post?id=${show.id}`}
	/*
	 server.get('/p/:id', (req, res) => {
	 	app.render(req, res, '/post', { id: req.params.id });
	});
	*/

	// as="/category/films" href="/films"
	server.get('/category/films', (req, res) => {
		app.render(req, res, '/films');
	});

	// as="/category/series" href="/series"
	server.get('/category/series', (req, res) => {
		app.render(req, res, '/series');
	});

	// as="/category/films" href="/shows"
	server.get('/category/shows', (req, res) => {
		app.render(req, res, '/shows');
	});
};
