import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const searchReducer = (state, action) => {
    // WHERE WE STORE SEARCH RESULTS TO RENDER ON DOM 
}

function* watcherSaga() {
    // FETCH-API and make a function to FETCH from API
    // Handle what the user searches 
}

// TODO - Function to GET API GIFS 

//TODO - Function to POST what the user searches

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        searchReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
