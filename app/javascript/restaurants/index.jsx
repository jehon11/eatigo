// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, Switch } from 'react-router-dom';
import App from './containers/app';
import MessagesReducer from './reducers/messages_reducer';
import ChannelsReducer from './reducers/channels_reducer';
import history from './history';
// internal modules
const root = document.getElementById('root');

window.addEventListener('resize', () => {
  document.body.height = window.innerHeight;
});

const initialState = {
  messages: [],
  channels: JSON.parse(chatContainer.dataset.channels),
};

const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
});

const middlewares = [ReduxPromise];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const combinedMiddlewares = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, initialState, combinedMiddlewares);

ReactDOM.render(
  <App />,
  root,
);
