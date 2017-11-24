import React, { Component } from 'react';
import initStore from '../store/configureStore';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layouts/MyLayout';
import LayoutCategories from '../components/Layouts/LayoutCategories';

class SeriesPage extends Component {
	componentDidMount() {
		// ...
	}

	render() {
		return (
			<Layout>
				<LayoutCategories>
					<h3>List of Series</h3>
					blha blah...
				</LayoutCategories>
			</Layout>
		);
	}
}

export default withRedux(initStore, null, null)(SeriesPage);
