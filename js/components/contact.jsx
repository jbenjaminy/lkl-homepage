import React from 'react'

class Contact extends React.Component {

	constructor() {
        super();
    }

    render() {
    	return (
            <div className='contact sub-page'>
				<br/>
				<h1 className='page-title'>CONTACT US</h1>
				<div className='outer-contact'>
  					<img className='contact-image' src="http://i.imgur.com/PvEfMHr.png" width='700'/>
					<h4 class='contact-info'>
						Lingard Fitch<br/><br/>
						713-540-1577<br/>
						info@lkldevelopmentgroup.com<br/>
						www.lkldevelopmentgroup.com
					</h4>
				</div>
				<br/>
            </div>
        );
    }
}

module.exports = Contact;
