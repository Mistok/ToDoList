import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/storeRedux';
import './index.css';
import App from './components/App';
import {HashRouter as Router, Route, } from 'react-router-dom';
import Tasks from "./components/Content/Tasks/tasks.jsx";
import Header from "./components/Header/header.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header/>
            <Route path='/' component={App}/>
            <Route path='/registration' exact component={RegisterPage}/>
            <Route path='/profile' exact component={ProfilePage}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);


