
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {gettingData} from "../Store/Actions/GettingDataAction/gettingData"
 
import combineReducers from './combineReducers'

const store = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(gettingData())

    
export default store;