import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/storeRedux';
import './index.css';
import App from './components/App';
import {HashRouter as Router, Route, } from 'react-router-dom';
import Header from "./components/Header/header.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import Content from "./components/Content/Content.jsx";
import SingleTask from "./components/SingleTask/SingleTask.jsx"


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header/>
            <Route path='/' exact component={App}/>
            <Route path='/tasks' exact component={Content}/>
            <Route path='/tasks/:taskId' exact component={SingleTask}/>
            <Route path='/registration' exact component={RegisterPage}/>
            <Route path='/profile' exact component={ProfilePage}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);


