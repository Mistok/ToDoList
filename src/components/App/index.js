import React from 'react';

import Header from "../Header/header.jsx";
import Nav from "../Navigation/navigation.jsx";
import Content from "../Content/Content.jsx";


const App = () => {

/*
    useEffect(() => {
            if(
                localStorage.getItem('tasks')){
                localStorage.getItem('tasks') && changeTaskList( JSON.parse(localStorage.getItem('tasks')))
                console.log('data from LS');
            }
        },
        []
    );

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(taskList));
        //console.log('data to LS');
    });
*/

    return (
        <>
            <Header />
            <Nav />
            <Content />
        </>
    );

};

export default App;