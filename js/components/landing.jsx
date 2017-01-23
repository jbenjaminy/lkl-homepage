import React from 'react';

class Landing extends React.Component {
    constructor() {
        super();
    }

	render() {
		return (
            <div className='landing'>
                <header>
                    <img src='http://i.imgur.com/IG0a3EZ.jpg' />
                </header>

                <section className='lkl-description'>
                    <h1 className='company-name lkl'>L<span className='k'>K</span>L DEVELOPMENT GROUP</h1>
                    <h2 className='sub-header'>A premier, residential real estate investment company based in Houston, Texas.</h2>
                </section>

                <section className='featured-projects'>
                </section>
            </div>
        );
    }
}

module.exports = Landing;
