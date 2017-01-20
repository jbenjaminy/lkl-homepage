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
            <div className="nav-bar">
                <center className="wrapper">
                    <table className="outer" width="100%">
                        <tr>
                            <td className="content">
                                <div className="nav-column left-column">
                                    <table className="inner" width="100%">
                                        <tr>
                                            <td className="inner-col">
                                                <div className="nav-left">
                                                    <img src='http://i.imgur.com/tyipyMy.png' className='nav-img' />
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    </div>
                                    <div className="nav-column right-column">
                                    <table className="inner" width="100%">
                                        <tr>
                                            <td className="inner-col">
                                                <ul className='nav-right'>                                                       
                                                    <li className='right-li'><a onClick={this.changePage.bind(this, '/contact-us')}>Contact Us</a></li>
                                                    <li><a onClick={this.changePage.bind(this, '/prior-projects')}>Prior Projects</a></li>
                                                    <li><a onClick={this.changePage.bind(this, '/current-projects')}>Current Projects</a></li>
                                                    <li><a onClick={this.changePage.bind(this, '/about-us')}>About Us</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </table>
                </center>
            </div>
        );
    }
}

module.exports = Nav;