import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Nav extends Component {
    constructor() {
        super();
        this.changePage = this.selectPage.bind(this);
        this.selectPage = this.selectPage.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.resetNav = this.resetNav.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
    }

    componentWillReceiveProps(nextProps) {
         if (nextProps.projects.path) {
            browserHistory.push(nextProps.projects.path);
        }
    }

    changePage(name) {
        this.props.resetState();
        browserHistory.push(name);
    }

    selectPage(name) {
        const { projectList, resetNav, selectPage } = this.props;
        const projects = projectList[name];
        resetNav();
        selectPage(projects);
    }

    toggleNav() {
        this.props.toggleNav();
    }

    resetNav() {
        this.props.resetNav();
    }

    renderOptions() {
        const { toggled } = this.props;
        if (toggled) {
            return (
                <ul className='nav-right proj-options'><li><a
                    onClick={this.selectPage.bind(this, 'current')}
                >
                    CURRENT PROJECTS
                </a></li>
                <li><a
                    onClick={this.selectPage.bind(this, 'closed')}
                >
                    CLOSED PROJECTS
                </a></li>
                <li><a
                    onClick={this.selectPage.bind(this, 'investment')}
                >
                    INVESTMENT OPPORTUNITIES
                </a></li>
                <li><a className='back-arrow fa fa-long-arrow-left'onClick={this.resetNav}>
                <span className='back'>&nbsp;&nbsp;BACK</span>
                </a></li>
                </ul>
            );
        }
        return (
            <ul className='nav-right'>
                <li><a onClick={this.changePage.bind(this, '/')}>
                    HOME
                </a></li>
                <li><a onClick={this.toggleNav}>
                    PROJECTS
                </a></li>
                <li><a onClick={this.changePage.bind(this, '/about_us')}>
                    ABOUT
                </a></li>
                <li><a onClick={this.changePage.bind(this, '/contact_us')}>
                    CONTACT
                </a></li>
            </ul>
        );
    }

	render() {
        console.log(this.props.state);
        const { changePage } = this.props;

		return (
            <div className="nav-bar"><center className="wrapper nav-wrapper"><table
                className="outer"
            ><tr><td className="content"><div className="column left-column"><table
                className="inner"
            ><tr><td className="inner-col"><div className="nav-left">
                <img
                    src='http://i.imgur.com/tyipyMy.png'
                    onClick={changePage.bind(this, '/')}
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
    projectList: state.projectList,
    projects: state.projects,
    project: state.project,
    toggled: state.toggled,
    state
});

export default connect(mapStateToProps, actions)(Nav);
