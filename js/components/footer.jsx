import React from 'react';
import {browserHistory} from 'react-router';

class Footer extends React.Component {
    constructor() {
        super();
        this.changePage = this.changePage.bind(this);
    }

    changePage(path) {
        browserHistory.push(path);
    }

	render() {
		return (
            <footer>
                <div className='footer-left'>
                    <ul>
                        <li><a onClick={this.changePage.bind(this, '/prior-projects')}>Prior Projects</a></li>
                        <li><a onClick={this.changePage.bind(this, '/about-us')}>About Us</a></li>
                        <li><a onClick={this.changePage.bind(this, '/current-projects')}>Current Projects</a></li>
                        <li><a onClick={this.changePage.bind(this, '/contact-us')}>Contact Us</a></li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <ul>
                        <li>Lingard Fitch</li>
                        <li><a href='tel:1-713-540-1577'>713-540-1577</a></li>
                        <li><a href='mailto:info@lkldevelopmentgroup.com'>info@lkldevelopmentgroup.com</a></li>
                        <li><a href='https://goo.gl/maps/H5Y7KN5JKMQ2'>4545 Bissonnet Street, Suite 285<br/>Houston, Texas 77401</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

module.exports = Footer;