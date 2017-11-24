import React, { Component } from 'react';
import PropTypes from 'prop-types';
import initStore from '../store/configureStore';
import withRedux from 'next-redux-wrapper';
import { fetchFilmsAction } from '../actions/courses';
import Layout from '../components/Layouts/MyLayout';
import LayoutCategories from '../components/Layouts/LayoutCategories';

class FilmsPage extends Component {
	componentDidMount() {
		this.props.fetchFilmsAction();
	}

	render() {
		return (
			<Layout>
				<LayoutCategories>
					<h3>List of Films</h3>
					blha blah...
				</LayoutCategories>
			</Layout>
		);
	}
}

FilmsPage.propTypes = {
	fetchFilmsAction: PropTypes.func.isRequired
};

export default withRedux(initStore, null, { fetchFilmsAction })(FilmsPage);
