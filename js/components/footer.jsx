import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Footer extends Component {
    constructor() {
        super();
        this.selectPage = this.selectPage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
         if (nextProps.projects && nextProps.page) {
            browserHistory.push(nextProps.page);
        }
    }

    selectPage(name) {
        this.props.toggleNav(false);
        this.props.selectProject({});
        this.props.selectPage(name);
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
                <li><a onClick={this.selectPage.bind(this, '/')}>
                    HOME
                </a></li>
            <li><a onClick={this.selectPage.bind(this, '/projects/current_projects')}>
                    CURRENT PROJECTS
                </a></li>
            <li><a onClick={this.selectPage.bind(this, '/projects/closed_projects')}>
                    CLOSED PROJECTS
                </a></li>
            <li><a onClick={this.selectPage.bind(this, '/projects/investment_opportunities')}>
                    INVESTMENT OPPORTUNITIES
                </a></li>
            <li><a onClick={this.selectPage.bind(this, '/about_us')}>
                    ABOUT
                </a></li>
            <li><a onClick={this.selectPage.bind(this, '/contact_us')}>
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
    projects: state.projects,
    project: state.project,
    toggled: state.toggled
});

export default connect(mapStateToProps, actions)(Footer);
