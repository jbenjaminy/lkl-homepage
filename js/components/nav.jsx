import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Nav extends Component {
    constructor() {
        super();
        this.changePage = this.changePage.bind(this);
    }

    changePage(path) {
        browserHistory.push(path);
    }

	render() {
        let categories = null;
        if (toggled) {
            categories = () => (
                <ul className='categories'>
                    <li>
                        <a onClick={this.changePage.bind(this, '/projects/current_projects')}>
                            CURRENT PROJECTS
                        </a>
                    </li>
                </ul>
            );
        }
		return (
            <div className="nav-bar"><center className="wrapper nav-wrapper">
                <table className="outer" width="100%">
                    <tr><td className="content">
                        <div className="column left-column">
                            <table className="inner" width="100%">
                                <tr><td className="inner-col"><div className="nav-left">
                                    <img
                                        src='http://i.imgur.com/tyipyMy.png'
                                        onClick={this.changePage.bind(this, '/')}
                                    />
                                </div></td></tr>
                            </table>
                        </div>
                        <div className="column right-column">
                            <table className="inner" width="100%">
                                <tr><td className="inner-col"><ul className='nav-right'>
                                    <li>
                                        <a onClick={this.changePage.bind(this, '/')}>
                                            HOME
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={this.toggleNav}>
                                            PROJECTS
                                        </a>
                                        {categories}
                                    </li>
                                    <li>
                                        <a onClick={this.changePage.bind(this, '/about_us')}>
                                            ABOUT
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={this.changePage.bind(this, '/contact_us')}>
                                            CONTACT
                                        </a>
                                    </li>
                                </ul></td></tr>
                            </table>
                        </div>
                    </td></tr>
                </table>
            </center></div>
        );
    }
}

const mapStateToProps = (state) => ({ meds: state.meds, grid: state.grid });


export default connect(mapStateToProps)(MainPage);
