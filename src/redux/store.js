import {createStore,applyMiddleware} from 'redux';
import reducers from  './reducers'
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
let history=createHashHistory();

export default createStore(reducers,applyMiddleware(thunk,routerMiddleware(history)))