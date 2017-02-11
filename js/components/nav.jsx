import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Nav extends Component {

    constructor() {
        super();
        this.toggleNav = this.toggleNav.bind(this);
        this.selectPage = this.selectPage.bind(this);
    }

    toggleNav() {
        this.props.toggleNav();
    }

    selectPage(name) {
        console.log('here');
        this.props.selectPage(name);
        let path = '';
        if (name === '/') {
            path = name;
        } else if (name === 'about_us' || name === 'contact_us') {
            path = `/${name}`;
        } else {
            path = `/projects/${name}`;
        }
        browserHistory.push(path);
    }

	render() {
        const {
            toggled
        } = this.props;
        console.log(toggled);

        const {
            selectPage,
            toggleNav
        } = this;

        let categories = null;

        if (toggled) {
            categories = () => (
                <ul className='categories'><li><a
                    onClick={selectPage.bind(this, 'current_projects')}
                >
                    CURRENT PROJECTS
                </a></li>
                <li><a
                    onClick={selectPage.bind(this, 'closed_projects')}
                >
                    CLOSED PROJECTS
                </a></li>
                <li><a
                    onClick={selectPage.bind(this, 'investment_opportunities')}
                >
                    INVESTMENT OPPORTUNITIES
                </a></li></ul>
            );
        }

		return (
            <div className="nav-bar"><center className="wrapper nav-wrapper"><table
                className="outer"
            ><tr><td className="content"><div className="column left-column"><table
                className="inner"
            ><tr><td className="inner-col"><div className="nav-left">
                <img
                    src='http://i.imgur.com/tyipyMy.png'
                    onClick={selectPage.bind(this, '/')}
                    alt='LKL DEVELOPMENT GROUP'
                />
            </div></td></tr></table></div>
            <div className="column right-column"><table className="inner"><tr><td
                className="inner-col"
            ><ul className='nav-right'>
                <li><a onClick={selectPage.bind(this, '/')}>
                    HOME
                </a></li>
                <li><a onClick={toggleNav}>
                    PROJECTS
                </a>
                    {categories}
                </li>
                <li>
                <a onClick={selectPage.bind(this, 'about_us')}>
                    ABOUT
                </a></li>
            <li><a onClick={selectPage.bind(this, 'contact_us')}>
                    CONTACT
                </a></li>
            </ul></td></tr></table></div></td></tr></table></center></div>
        );
    }
}

const mapStateToProps = (state) => ({
	toggled: state.toggled
});

export default connect(mapStateToProps, actions)(Nav);
