import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import Lesson from './containers/Lesson';
import Profile from './containers/Profile';
import './common/index.less';
import App from './containers/app';
import {Provider} from 'react-redux';
import store from './redux/store';
import Login from './containers/login';
import 'bootstrap/dist/css/bootstrap.css'
window._store=store;

render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/lesson'   component={Lesson}/>
                    <Route path='/profile'  component={Profile}/>
                    <Route path='/login' exact component={Login}/>

                </Switch>
            </App>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
)

