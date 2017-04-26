import {combineReducers, createStore, applyMiddleware} from 'redux';
import videoReducer from './reducers/videoReducer';
import thunk from 'redux-thunk';


const store = createStore(combineReducers({videoReducer}), {}, applyMiddleware(thunk));
export default store;