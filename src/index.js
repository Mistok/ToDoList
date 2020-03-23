import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

export let rerenderEntireTree =() => {

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};

rerenderEntireTree();