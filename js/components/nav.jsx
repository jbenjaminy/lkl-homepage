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

    componentWillReceiveProps(nextProps) {
        if (nextProps.page) {
            browserHistory.push(nextProps.page);
        }
    }

    toggleNav() {
        this.props.toggleNav();
    }

    selectPage(name) {
        this.props.selectPage(name);
    }

	render() {
        console.log(this.props.state);
        const {
            toggled
        } = this.props;

        const {
            selectPage,
            toggleNav
        } = this;

        if (toggled) {
            this.categories = () => (
                <ul className='categories'><li><a
                    onClick={selectPage.bind(this, '/projects/current_projects')}
                >
                    CURRENT PROJECTS
                </a></li>
                <li><a
                    onClick={selectPage.bind(this, 'projects/closed_projects')}
                >
                    CLOSED PROJECTS
                </a></li>
                <li><a
                    onClick={selectPage.bind(this, 'projects/investment_opportunities')}
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
                    {this.categories}
                </li>
                <li>
                <a onClick={selectPage.bind(this, '/about_us')}>
                    ABOUT
                </a></li>
            <li><a onClick={selectPage.bind(this, '/contact_us')}>
                    CONTACT
                </a></li>
            </ul></td></tr></table></div></td></tr></table></center></div>
        );
    }
}

const mapStateToProps = (state) => ({
	toggled: state.toggled,
    page: state.page,
    state

});

export default connect(mapStateToProps, actions)(Nav);
