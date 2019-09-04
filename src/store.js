import {createStore, combineReducers, applyMiddleware, } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';



const rootReducer = combineReducers({

})

export default createStore(rootReducer, applyMiddleware)