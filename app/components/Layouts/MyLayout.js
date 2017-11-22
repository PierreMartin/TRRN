import Head from 'next/head';
import NavMain from './../navigation/NavMain';

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

const Layout = (props) => (
	<div style={layoutStyle}>
		<Head>
			<title>My page title</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous" />
		</Head>

		<NavMain />
		{props.children}
	</div>
);

export default Layout;
