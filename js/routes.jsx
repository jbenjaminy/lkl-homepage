import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Nav from './components/nav';
import Landing from './components/landing';
import About from './components/about';
import Current from './components/current';
import Prior from './components/prior';
import Contact from './components/contact';
import Footer from './components/footer';

let App = (props) => {
    return (
        <div className='app'>
            <Nav />
            <div className='main'>
                {props.children}
            </div>
            <Footer />
            <h3 className='attribution'>&copy; 2017 LKL DEVELOPMENT GROUP&nbsp;&nbsp;|&nbsp;&nbsp;ALL RIGHTS RESERVED&nbsp;&nbsp;|&nbsp;&nbsp;WEB DESIGN BY <a href='http://www.jbenjaminy.com'>JBENJAMINY</a></h3>
        </div>
    )
}

const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Landing}/>
          <Route path='/about-us' component={About}/>
          <Route path='/current-projects' component={Current}/>
          <Route path='/prior-projects' component={Prior}/>
          <Route path='/contact-us' component={Contact}/>
        </Route>
    </Router>
);

export default routes;