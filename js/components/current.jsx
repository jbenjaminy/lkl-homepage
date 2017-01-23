import React from 'react'

class Current extends React.Component {

	constructor() {
        super();
    }

    render() {
    	return (
            <div className='current sub-page'>
				<br/>
				<h1 className='page-title'>CURRENT PROJECTS</h1>
				<h2 className='coming-soon'>Coming soon</h2>
				<br/>
            </div>
        );
    }
}

module.exports = Current;
