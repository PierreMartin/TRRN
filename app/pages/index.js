import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/configureStore';
import { typingCreateCourseAction, createCourseAction, fetchCoursesAction } from '../actions/courses';
import Layout from '../components/Layouts/MyLayout';
import Input from '../components/input/input';
import CoursesList from '../components/coursesList/coursesList';


class Index extends Component {
	constructor(props) {
		super(props);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
	}

	componentDidMount() {
		this.props.fetchCoursesAction();
	}

	componentDidUpdate() {
		// ...
	}

	handleChangeMessage(event) {
		this.props.typingCreateCourseAction(event.target.value);
	}

	handleSubmitMessage(event) {
		if (event.which === 13) {
			event.preventDefault();
			this.props.createCourseAction(event.target.value.trim());
		}
	}

	render() {
		const { typingCreateCourseState, courses } = this.props;

		return (
			<Layout>
				<h1>Hello, world!</h1>
				<img src="../static/cat.jpg" alt="cat" />

				<Input
					placeholder="Write something here"
					handleChangeMessage={this.handleChangeMessage}
					handleSubmitMessage={this.handleSubmitMessage}
					value={typingCreateCourseState}
				/>

				<CoursesList courses={courses} />

			</Layout>
		);
	}
}

/*
HomePage.propTypes = {
	optionalArray: PropTypes.array,
	optionalBool: PropTypes.bool,
	optionalFunc: PropTypes.func,
	optionalNumber: PropTypes.number,
	optionalObject: PropTypes.object,
	optionalString: PropTypes.string,
	optionalSymbol: PropTypes.symbol
};
*/

// TODO gerer SASS
// TODO gerer les routes coté server
// TODO gerer variables env pour configureStore
Index.propTypes = {
	courses: PropTypes.arrayOf.isRequired,
	typingCreateCourseAction: PropTypes.func.isRequired,
	typingCreateCourseState: PropTypes.string.isRequired,
	createCourseAction: PropTypes.func.isRequired,
	fetchCoursesAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses.courses,
		typingCreateCourseState: state.courses.typingCreateCourseState
	};
};

export default withRedux(initStore, mapStateToProps, { typingCreateCourseAction, createCourseAction, fetchCoursesAction })(Index);
