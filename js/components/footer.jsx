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
                <center className="wrapper footer-wrapper">
                    <table className="outer" width="100%">
                        <tr>
                            <td className="content">
                                <div className="nav-column left-column">
                                    <table className="inner" width="100%">
                                        <tr>
                                            <td className="inner-col">
                                                <div className='footer-left'>
                                                    <ul>
                                                        <li><a onClick={this.changePage.bind(this, '/about-us')}>ABOUT</a></li>
                                                        <li><a onClick={this.changePage.bind(this, '/current-projects')}>CURRENT PROJECTS</a></li>
                                                        <li><a onClick={this.changePage.bind(this, '/prior-projects')}>PRIOR PROJECTS</a></li>
                                                        <li><a onClick={this.changePage.bind(this, '/contact-us')}>CONTACT</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    </div>
                                    <div className="nav-column right-column">
                                    <table className="inner" width="100%">
                                        <tr>
                                            <td className="inner-col">
                                                <div className='footer-right'>
                                                    <ul>
                                                        <li>LINGARD FITCH</li>
                                                        <li><a href='tel:1-713-540-1577'>713-540-1577</a></li>
                                                        <li><a href='mailto:info@lkldevelopmentgroup.com'>INFO@LKLDEVELOPMENTGROUP.COM</a></li>
                                                        <li><a href='https://goo.gl/maps/H5Y7KN5JKMQ2'>4545 BISSONNET STREET, SUITE 285<br/>HOUSTON, TEXAS 77401</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </table>
                </center>
            </footer>
        );
    }
}

module.exports = Footer;