import React, { Component } from 'react';
import initStore from '../store/configureStore';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layouts/MyLayout';
import LayoutCategories from '../components/Layouts/LayoutCategories';

class ShowsPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// ...
	}

	render() {
		return (
			<Layout>
				<LayoutCategories>
					<h3>List of Shows</h3>
					blha blah... kjkj kjkjkj k
				</LayoutCategories>
			</Layout>
		);
	}
}

export default withRedux(initStore, null, null)(ShowsPage);
