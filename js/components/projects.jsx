import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Projects extends Component {
	constructor() {
		super();
		this.selectProject = this.selectProject.bind(this);
	}

	componentWillMount() {
		this.projs = this.props.projects.map((project) => (
			<li>
				<img src={project.images[0]} alt={project.images[0]} />
				<h2>
					{project.name}
				</h2>
				<a onClick={this.selectProject.bind(this, project)}>
					More Details
				</a>
			</li>
		));
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.project) {
			browserHistory.push(nextProps.project.path);
		}
	}

    selectProject(project) {
		this.props.selectProject(project);
    }

	render() {
		return (
			<div className='projects sub-page'>
				<br />
				<h1 className='page-title'>
					{this.props.page}
				</h1>
				<ul>
					{this.projs}
				</ul>
				<br />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.page,
	projects: state.projects[state.page],
	project: state.project
});

export default connect(mapStateToProps, actions)(Projects);
