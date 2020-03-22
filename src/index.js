import React from 'react';
import ReactDOM from 'react-dom';
import addNewTask from './Static/state'
import App from './components/App';

let newTask = {
    id: '5',
    author: 'Roger Briges',
    date: 'something',
    time: 'something',
    title: 'something',
    location: {
        locationTitle: 'something',
        map: '#'
    },

    text: 'something',
    friends: [{
        name: '',
        avatar: ''
    },]
};

export let rerenderEntireTree =() => {

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};

rerenderEntireTree();