import { combineReducers } from "redux";

import Reducer from './Reducer/Reducer'
import FilmReducer from './Reducer/reducerFilms';
import loaderReducer from "./Reducer/loaderReducer";
import starReducer from "./Reducer/starReducer"
import CounterReducer from "./Reducer/conuterReducer"



export default  combineReducers({
  
    FilmReducer:FilmReducer,
    Reducer:Reducer,
    loaderReducer:loaderReducer,
    starReducer:starReducer,
    counterReducer:CounterReducer

  })