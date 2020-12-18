import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* watcherSaga() {
    // FETCH-API and make a function to FETCH from API
    // Handle what the user searches 
    
        yield takeEvery('FETCH_SEARCH', fetchSearch);
        yield takeEvery('POST_SEARCH', postSearch);

        //yield takeEvery('ADD_FRUIT', postFruit)
    
}

function * postSearch() {
    console.log('in postSearch Saga');
    
}

function* fetchSearch(){
    
    console.log('in fetchGiphy saga');
    try {
        const searchResponse = yield axios.get('/api/category');
    //   const searchURL = searchResponse.data.data.url;
        console.log('this is our URL for the Gif', searchResponse.data);
       
        yield put({ type:'SET_SEARCH', payload: searchResponse.data})
    } catch (error) {
        console.log('error fetching', error);
        
    }
}
// TODO - Function to GET API GIFS 

//TODO - Function to POST what the user searches

const sagaMiddleware = createSagaMiddleware();

const searchReducer = (state = [], action) => {
    // WHERE WE STORE SEARCH RESULTS TO RENDER ON DOM
    if(action.type === 'SET_SEARCH') {
        return action.payload;
        
    }
    console.log(1);
    
    return state;
    

}

const storeInstance = createStore(
    combineReducers({
        searchReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
