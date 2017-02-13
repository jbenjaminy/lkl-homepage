import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {
	render() {
		console.log(this.props.project);
		this.images = this.props.project.images.map((uri) => (
			<li key={uri}>
				<div className='proj-image'>
					<img src={uri} alt={uri} className='image no-hover' />
				</div>
			</li>
		));
		return (
			<div className='projects sub-page'><br />
				<h1 className='page-title'>
					{this.props.project.name}
				</h1>
				<h2 className='specs'>
					{this.props.project.neighborhood}
				</h2>
				<p className='description'>
					{this.props.project.specs}
				</p>
				<ul className='projs-ul'>
					{this.images}
				</ul>
			<br /></div>
		);
	}
}

const mapStateToProps = (state) => ({
	project: state.project
});

export default connect(mapStateToProps)(Project);
