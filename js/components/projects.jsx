import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Projects extends Component {
	constructor() {
        super();
        this.changePage = this.changePage.bind(this);
    }

	componentWillMount() {
		this.projs = this.props.projects.map((project) => {
			return(
				<li>
					<img src={project.uri} />
					<h2>
						{project.header}
					</h2>
					<a onClick={this.changePage.bind(this, project.name)}>
						More Details
					</a>
				</li>
			)
		});
	}

    changePage(name) {
		this.props.selectProject(name)
        browserHistory.push(`/name`);
    }

	render() {
		return (
	        <div className='projects sub-page'>
				<br/>
					<h1 className='page-title'>
						{this.props.page}
					</h1>
					<ul>
						{this.projs}
					</ul>
				<br/>
	        </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page,
		projects: state.projects[state.page]
	};
};

export default connect(mapStateToProps, actions)(Projects);
