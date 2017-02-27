import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Footer extends Component {
    constructor() {
        super();
        this.changePage = this.changePage.bind(this);
        this.selectPage = this.selectPage.bind(this);
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
        const { projectList, resetFlag, resetNav, selectPage } = this.props;
        const projects = projectList[name];
        resetFlag();
        resetNav();
        selectPage(projects);
    }

	render() {
		return (
            <footer><center
                className='wrapper footer-wrapper'
            ><table className='outer'><tr><td
                className='content'
            ><div className='column left-column'><table className='inner'><tr><td
                className='inner-col'
            ><ul className='footer-left'>
                <span className='a'>
                <li><a onClick={this.changePage.bind(this, '/')}>
                    HOME
                </a></li>
            <li><a onClick={this.selectPage.bind(this, 'current')}>
                    CURRENT PROJECTS
                </a></li>
            <li><a onClick={this.selectPage.bind(this, 'closed')}>
                    CLOSED PROJECTS
                </a></li>
            <li><a onClick={this.selectPage.bind(this, 'investment')}>
                    INVESTMENT OPPORTUNITIES
                </a></li>
            <li><a onClick={this.changePage.bind(this, '/about_us')}>
                    ABOUT
                </a></li>
            <li><a onClick={this.changePage.bind(this, '/contact_us')}>
                    CONTACT
                </a></li>
                </span>
            </ul></td></tr></table></div>
            <div className='column right-column'><table className='inner'><tr><td
                className='inner-col'
            ><div><ul className='footer-right'>
                <li className='footer-name'><span className='lkl'>
                    L
                </span><span className='k'>
                    K
                </span><span className='lkl'>
                    L DEVELOPMENT GROUP
                </span></li>
                <span className='a'><li><a href='tel:1-713-540-1577'>
                    713-540-1577
                </a></li>
                <li><a href='mailto:info@lkldevelopmentgroup.com'>
                    INFO@LKLDEVELOPMENTGROUP.COM
                </a></li></span>
                <li className='address'><a href='https://goo.gl/maps/H5Y7KN5JKMQ2'>
                    4545 BISSONNET STREET, SUITE 285
                <br />
                    HOUSTON, TEXAS 77401
                </a></li>
            </ul></div></td></tr></table></div></td></tr></table></center></footer>
        );
    }
}

const mapStateToProps = (state) => ({
    projectList: state.projectList,
    projects: state.app.projects,
    project: state.app.project,
    toggled: state.app.toggled
});

export default connect(mapStateToProps, actions)(Footer);
