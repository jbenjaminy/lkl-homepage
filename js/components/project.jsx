import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {
	componentWillMount() {
		this.project = this.props.projects[this.props.page].forEach((project) => {
			if (project.name === this.props.project) {
				return project;
			}
		});
	}

	render() {
		const images = this.project.images.map((uri) => (
			<li>
				<image src={uri} />
			</li>
		));
		return (
			<div className='projects sub-page'><br />
				<h1 className='page-title'>
					{this.project.header}
				</h1>
				<h2 className='specs'>
					{this.project.specs}
				</h2>
				<p className='description'>
					{this.project.description}
				</p>
				<ul>
					{images}
				</ul>
			<br /></div>
		);
	}
}

const mapStateToProps = (state) => ({
		page: state.page,
		projects: state.projects[state.page],
		project: state.project
	});

export default connect(mapStateToProps)(Project);
