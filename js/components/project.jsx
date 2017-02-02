import React from 'react';

const Project = (props) => {
	let projects = 'Coming Soon';
	if (props.projects.length >= 1) {
		projects = props.projects.map((project) => {
			return (
				<li>
					<img src={project.img} />
						<Link to={`/projects/${props.page}/${props.name}`}>
							{project.header}
						<Link>
					</a>
				</li>
			)
		});
	}
	return (
        <div className='projects sub-page'>
			<br/>
			<h1 className='page-title'>{props.page}</h1>
			<ul>{projects}</ul>
			<br/>
        </div>
    );
}

export default Project;
