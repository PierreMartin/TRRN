import Head from 'next/head';
import NavMain from './../navigation/NavMain';
import stylesheet from './../../css/main.scss';

const Layout = (props) => (
	<div className="layoutMain">
		<Head>
			<title>My page title</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous" />
			<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
		</Head>

		<NavMain />
		{props.children}
	</div>
);

export default Layout;
