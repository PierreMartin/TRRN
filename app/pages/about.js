import React, { Component } from 'react';
import initStore from '../store/configureStore';
import withRedux from 'next-redux-wrapper';
import Layout from '../components/Layouts/MyLayout';

class AboutPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// ...
	}

	render() {
		return (
			<Layout>
				<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iusto minus obcaecati tempora veniam vitae. Consectetur in magnam nulla velit! A eveniet nemo non unde. Illum maxime minima repudiandae voluptate.</h2>
				<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iusto minus obcaecati tempora veniam vitae. Consectetur in magnam nulla velit! A eveniet nemo non unde. Illum maxime minima repudiandae voluptate.</h2>
				<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iusto minus obcaecati tempora veniam vitae. Consectetur in magnam nulla velit! A eveniet nemo non unde. Illum maxime minima repudiandae voluptate.</h2>
				<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iusto minus obcaecati tempora veniam vitae. Consectetur in magnam nulla velit! A eveniet nemo non unde. Illum maxime minima repudiandae voluptate.</h2>
				<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iusto minus obcaecati tempora veniam vitae. Consectetur in magnam nulla velit! A eveniet nemo non unde. Illum maxime minima repudiandae voluptate.</h2>
			</Layout>
		);
	}
}

export default withRedux(initStore, null, null)(AboutPage);
