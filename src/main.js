import React from 'react';
import {render} from 'react-dom';
import { Router ,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import Lesson from './containers/Lesson';
import Profile from './containers/Profile';
import './common/index.less';
import App from './containers/app';
import {Provider} from 'react-redux';
import store from './redux/store';
import Login from './containers/login';
import 'bootstrap/dist/css/bootstrap.css'
import {ConnectedRouter} from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
let history=createHashHistory();
import Register from './containers/Register'
window._store=store;

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/lesson'   component={Lesson}/>
                    <Route path='/profile'  component={Profile}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/reg' exact component={Register}/>
                </Switch>
            </App>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('app')
)

