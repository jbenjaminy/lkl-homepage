import React from 'react';
import {browserHistory} from 'react-router';

class Nav extends React.Component {
    constructor() {
        super();
        this.changePage = this.changePage.bind(this);
    }

    changePage(path) {
        browserHistory.push(path);
    }

	render() {
		return (
            <nav>
                <div className='nav-left'>
                    <img src='http://i.imgur.com/tyipyMy.png' />
                </div>
                <div className='nav-right'>
                    <ul>
                        <li><a onClick={this.changePage.bind(this, '/contact-us')}>Contact Us</a></li>
                        <li><a onClick={this.changePage.bind(this, '/prior-projects')}>Prior Projects</a></li>
                        <li><a onClick={this.changePage.bind(this, '/current-projects')}>Current Projects</a></li>
                        <li><a onClick={this.changePage.bind(this, '/about-us')}>About Us</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Nav;