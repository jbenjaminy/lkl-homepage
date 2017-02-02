import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import routes from './routes';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={createStore(reducers)}>
          {routes}
        </Provider>, document.getElementById('app')
    );
});
