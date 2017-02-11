import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Projects extends Component {
	componentWillMount() {
		this.projs = this.props.projects.map((project) => (
			<li>
				<img src={project.uri} alt={project.uri} />
				<h2>
					{project.name}
				</h2>
				<a onClick={this.changePage.bind(this, project.name)}>
					More Details
				</a>
			</li>
		));
	}

    changePage(name) {
		this.props.selectProject(name);
		let path = name.split(' ').join('_');
		path = `/projects/${this.props.page}/${path}`;
		console.log(name, path);
        browserHistory.push(`/${name}`);
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
	projects: state.projects[state.page]
});

export default connect(mapStateToProps, actions)(Projects);
