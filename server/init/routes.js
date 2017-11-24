// import passport from 'passport';
import { controllers /*passport as passportConfig*/ } from '../db';

const showsController = controllers && controllers.shows;

export default (app) => {
	// shows routes
	if (showsController) {
		app.get('/sessions', showsController.all);
		app.post('/users', showsController.add);
	} else {
		console.warn('shows routes');
	}

	// as={`/p/${show.id}`} href={`/post?id=${show.id}`}
	app.get('/p/:id', (req, res) => {
		const actualPage = '/post';
		const queryParams = { id: req.params.id };
		app.render(req, res, actualPage, queryParams);
	});

	// as="/category/films" href="/films"
	app.get('/category/films', (req, res) => {
		app.render(req, res, '/films');
	});

	/*
	if (passportConfig && passportConfig.google) {
		app.get('/auth/google', passport.authenticate('google', {
			scope: [
				'https://www.googleapis.com/auth/userinfo.profile',
				'https://www.googleapis.com/auth/userinfo.email'
			]
		}));

		app.get('/auth/google/callback',
			passport.authenticate('google', {
				successRedirect: '/',
				failureRedirect: '/login'
			})
		);
	}
	*/
};
