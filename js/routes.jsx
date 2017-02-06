import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';
import Nav from './components/nav';
import Landing from './components/landing';
import Projects from './components/projects';
import Project from './components/project';
import About from './components/about';
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
            <h3 className='attribution'>&copy; 2017 <span className='lkl'>L</span><span className='k'>K</span><span className='lkl'>L DEVELOPMENT GROUP</span>&nbsp;&nbsp;|&nbsp;&nbsp;ALL RIGHTS RESERVED&nbsp;&nbsp;|&nbsp;&nbsp;WEB DESIGN BY <a href='http://www.jbenjaminy.com'>JBENJAMINY</a></h3>
        </div>
    )
}

const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Landing}/>
          <Route path='/projects/:category'>
              <IndexRoute component={Projects} />
              <Route path='/projects/:category/:project'>
                  <IndexRoute component={Project} />
              </Route>
          </Route>
          <Route path='/about_us' component={About}/>
          <Route path='/contact_us' component={Contact}/>
        </Route>
    </Router>
);

export default routes;
