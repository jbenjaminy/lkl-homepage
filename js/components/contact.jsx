import React from 'react'
import {browserHistory} from 'react-router';

class Contact extends React.Component {

	constructor() {
        super();
		this.changePage = this.changePage.bind(this);
    }

	changePage(path) {
		browserHistory.push(path);
	}

    render() {
    	return (
            <div className='contact sub-page'>
				<br/>
				<h1 className='page-title'>CONTACT US</h1>
				<div className='outer-contact'>
  					<img className='contact-image' src="http://i.imgur.com/PvEfMHr.png" width='700'/>
					<h4>
						<span className='lfitch'>Lingard Fitch</span><br/><br/><br/><br/>
						<a href='tel:1-713-540-1577'>713-540-1577  &nbsp;<span className="fa fa-phone fa-1x"></span></a><br/><br/>
						<a href='mailto:info@lkldevelopmentgroup.com'>info@lkldevelopmentgroup.com  &nbsp;<span className="fa fa-envelope fa-1x"></span></a><br/><br/>
						<a onClick={this.changePage.bind(this, '/')}>www.lkldevelopmentgroup.com  &nbsp;<span className="fa fa-globe fa-1x"></span></a>
					</h4>
				</div>
				<br/>
            </div>
        );
    }
}

module.exports = Contact;
