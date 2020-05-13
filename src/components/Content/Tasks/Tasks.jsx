import React, {useState, useEffect} from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';

import { connect } from 'react-redux';

// import store_old from "../../../store_old/store_old";
import {showMore} from "../../../actions/actions";
const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} `;


const Tasks = (props) => {
    //
    // const [taskList, changeTaskList] = useState(store_old.getStore());
    // const callbackForEmit = () =>{
    //     changeTaskList(store_old.getStore())
    // };
    // useEffect(()=>{
    //     store_old.addEventListener(callbackForEmit);
    //     if(
    //         localStorage.getItem('tasks')){
    //         localStorage.getItem('tasks') && changeTaskList( JSON.parse(localStorage.getItem('tasks')));
    //         // console.log('data from LocalStorage');
    //     }
    //     return ()=>{
    //         store_old.removeEventListener(callbackForEmit);
    //     }
    // }, []);
    //
    useEffect(() => {
            if( localStorage.getItem('tasks')){
                props = JSON.parse(localStorage.getItem('tasks'));
                console.log('data from LS');
            }
        },
        []
    );

    return(
        <div className="content_wrapper">

           { props.taskList.map( task => (
               <FadeOutDown>
               <Task
                   task = {task}
                   key = {task.id}
                />

               </FadeOutDown>) )
           }
            <button className={'show_more_btn'} onClick={showMore}>Show more!</button>
        </div>

    )

};

export default connect(
    store => ({
         taskList: store
    })
)(Tasks);