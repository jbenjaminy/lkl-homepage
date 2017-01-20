import React from 'react';

class Landing extends React.Component {
    constructor() {
        super();
    }

	render() {
		return (
            <div className='landing'>
                <header>
                    <img src='http://i.imgur.com/HaZMfjZ.png' />
                </header>

                <section className='featured-projects'>
                </section>
            </div>
        );
    }
}

module.exports = Landing;