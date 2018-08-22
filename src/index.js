import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

//REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducers from './reducers';
import apiClient from './middlewares/api';
import sideEffects from './middlewares/sideEffects';

const store = createStore(rootReducers, applyMiddleware(apiClient, logger, sideEffects));

ReactDOM.render(
<Provider store = {store}> 
<App />
</Provider>,
 document.getElementById('root')
);
registerServiceWorker();
