import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Project extends Component {
	componentDidMount() {
		this.props.selectPage({});
	}
	render() {
		const { project } = this.props;
		console.log(project);
		this.images = project.images.map((uri) => (
			<li key={uri}>
				<div className='proj-image'>
					<img src={uri} alt={uri} className='image no-hover' />
				</div>
			</li>
		));
		return (
			<div className='projects sub-page'><br />
				<h1 className='page-title'>
					{project.name}
				</h1>
				<h2 className='specs'>
					{project.neighborhood}
				</h2>
				<p className='description'>
					{project.specs}
				</p>
				<ul className='projs-ul'>
					{this.images}
				</ul>
			<br /></div>
		);
	}
}

const mapStateToProps = (state) => ({
	project: state.app.project
});

export default connect(mapStateToProps, actions)(Project);
