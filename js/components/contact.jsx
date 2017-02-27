import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Contact extends Component {
	changePage(path) {
		this.props.resetState();
		browserHistory.push(path);
	}

    render() {
		return (
            <div className='contact sub-page'><br />
				<h1 className='page-title'>
					CONTACT US
				</h1>
				<div className='outer-contact'>
					<img
						className='contact-image'
						src='http://i.imgur.com/PvEfMHr.png'
						width='700'
						alt='LKL DEVELOPMENT GROUP'
					/>
					<h4><span className='lfitch'>
						Lingard Fitch
					</span><br /><br /><br /><br />
					<a href='tel:1-713-540-1577'>
						713-540-1577  &nbsp;
					<span className="fa fa-phone fa-1x" /></a><br /><br />
					<a href='mailto:info@lkldevelopmentgroup.com'>
						info@lkldevelopmentgroup.com  &nbsp;
					<span className="fa fa-envelope fa-1x" /></a><br /><br />
					<a onClick={this.changePage.bind(this, '/')}>
						www.lkldevelopmentgroup.com  &nbsp;
						<span className="fa fa-globe fa-1x" />
					</a>
				</h4>
				</div><br />
            </div>
        );
    }
}

export default Contact;
