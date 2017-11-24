// import passport from 'passport';
import { controllers /*passport as passportConfig*/ } from '../db';

const showsController = controllers && controllers.shows;

export default (server) => {
	// shows routes
	if (showsController) {
		server.get('/api/shows', showsController.all);
		server.post('/api/show', showsController.add);
	} else {
		console.warn('shows routes');
	}

	/*
	if (passportConfig && passportConfig.google) {
	 server.get('/auth/google', passport.authenticate('google', {
			scope: [
				'https://www.googleapis.com/auth/userinfo.profile',
				'https://www.googleapis.com/auth/userinfo.email'
			]
		}));

	 server.get('/auth/google/callback',
			passport.authenticate('google', {
				successRedirect: '/',
				failureRedirect: '/login'
			})
		);
	}
	*/
};
