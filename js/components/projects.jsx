import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Projects extends Component {
	constructor() {
		super();
		this.selectProject = this.selectProject.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.showDetails) {
			browserHistory.push(nextProps.project.path);
		}
	}

	selectProject(project) {
		const { resetNav, selectProject } = this.props;
		resetNav();
		selectProject(project);
	}

	render() {
		const { projects, name } = this.props;

		this.projs = projects.map((project) => (
			<li key={project.name}>
				<div className='proj-image'>
					<a onClick={this.selectProject.bind(this, project)}><img
						className='image'
						src={project.images[0]}
						alt={name}
					/></a>
				</div>
				<div className='caption'>
					<a onClick={this.selectProject.bind(this, project)}><h2>
						{project.name}
					</h2></a>
					<a onClick={this.selectProject.bind(this, project)}>
						More Details
					</a>
				</div>
			</li>
		));

		return (
			<div className='projects sub-page'>
				<br />
				<h1 className='page-title'>
					{name}
				</h1>
				<ul className='projs-ul'>
					{this.projs}
				</ul>
				<br />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    projects: state.projects,
    project: state.project,
	showDetails: state.showDetails
});

export default connect(mapStateToProps, actions)(Projects);
