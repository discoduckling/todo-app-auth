import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';

const store = createStore(
    reducers,
    applyMiddleware(reduxThunk, logger)
);

ReactDOM.render(
    <Provider store={ store }>
    <App />
    </Provider>, 
    document.getElementById('root'));

