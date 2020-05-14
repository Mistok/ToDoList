import React, {useState, useEffect} from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';

import { connect } from 'react-redux';

import {showMore} from "../../../actions/actions";
const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} `;


const Tasks = (props) => {

    let [taskList, changeTasklist ]= useState(props.taskList); // локальный стейт, для взятия из LocalStorage

    // useEffect(() => {
    //         if( localStorage.getItem('tasks')){
    //             changeTasklist(
    //                 taskList = JSON.parse(localStorage.getItem('tasks'))
    //             );
    //             console.log('data from LS');
    //         }
    //     },
    //     []
    // );

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