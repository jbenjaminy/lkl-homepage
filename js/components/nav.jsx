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
         if (nextProps.projects && nextProps.page) {
            browserHistory.push(nextProps.page);
        }
    }

    selectPage(name) {
        this.props.toggleNav(false);
        this.props.selectProject(null);
        this.props.selectPage(name);
    }

    toggleNav() {
        this.props.toggleNav({});
    }

    renderOptions() {
        if (this.props.toggled) {
            return (
                <ul className='nav-right proj-options'><li><a
                    onClick={this.props.selectPage.bind(this, '/projects/current_projects')}
                >
                    CURRENT PROJECTS
                </a></li>
                <li><a
                    onClick={this.props.selectPage.bind(this, '/projects/closed_projects')}
                >
                    CLOSED PROJECTS
                </a></li>
                <li><a
                    onClick={this.props.selectPage.bind(this, '/projects/investment_opportunities')}
                >
                    INVESTMENT OPPORTUNITIES
                </a></li>
                <li><a className='back-arrow fa fa-long-arrow-left'onClick={this.toggleNav}>
                <span className='back'>&nbsp;&nbsp;BACK</span>
                </a></li>
                </ul>
            );
        }
        return (
            <ul className='nav-right'>
                <li><a onClick={this.props.selectPage.bind(this, '/')}>
                    HOME
                </a></li>
                <li><a onClick={this.toggleNav}>
                    PROJECTS
                </a></li>
                <li><a onClick={this.props.selectPage.bind(this, '/about_us')}>
                    ABOUT
                </a></li>
                <li><a onClick={this.props.selectPage.bind(this, '/contact_us')}>
                    CONTACT
                </a></li>
            </ul>
        );
    }

	render() {
		return (
            <div className="nav-bar"><center className="wrapper nav-wrapper"><table
                className="outer"
            ><tr><td className="content"><div className="column left-column"><table
                className="inner"
            ><tr><td className="inner-col"><div className="nav-left">
                <img
                    src='http://i.imgur.com/tyipyMy.png'
                    onClick={this.props.selectPage.bind(this, '/')}
                    alt='LKL DEVELOPMENT GROUP'
                />
            </div></td></tr></table></div>
            <div className="column right-column"><table className="inner"><tr><td
                className="inner-col"
            >
                {this.renderOptions()}
            </td></tr></table></div></td></tr></table></center></div>
        );
    }
}

const mapStateToProps = (state) => ({
	toggled: state.toggled.toggled,
    projects: state.projects,
    page: state.page,
    state

});

export default connect(mapStateToProps, actions)(Nav);
