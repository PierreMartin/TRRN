import React, { Component } from 'react';
import initStore from '../store/configureStore';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layouts/MyLayout';
import LayoutCategories from '../components/Layouts/LayoutCategories';

class CategoriesPage extends Component {
	render() {
		return (
			<Layout>
				<LayoutCategories />
			</Layout>
		);
	}
}

export default withRedux(initStore, null, null)(CategoriesPage);
