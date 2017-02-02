import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Projects extends Component {
	constructor() {
        super();
        this.changePage = this.changePage.bind(this);
    }

    changePage(name) {
		this.props.selectProject(name)
        browserHistory.push(`/name`);
    }

	render() {
		const { page, projects } = this.props;
		let projs = 'Coming Soon';
		if (projects.length >= 1) {
			projs = projects.map((project) => (
				<li>
					<img src={project.uri} />
					<h2>{project.header}</h2>
					<a onClick={this.changePage.bind(this, project.name)}>
						More Details
					</a>
				</li>
			));
		}

		return (
	        <div className='projects sub-page'>
				<br/>
				<h1 className='page-title'>{page}</h1>
				<ul>{projs}</ul>
				<br/>
	        </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page,
		projects: state.projects[state.page],
	};
};

export default connect(mapStateToProps, actions)(Projects);
