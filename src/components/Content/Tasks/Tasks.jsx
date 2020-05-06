import React, {useState, useEffect} from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';

import store from "../../../store/store"

const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} `;


const Tasks = (props) => {

    const [taskList, changeTaskList] = useState(store.getStore());
    const callbackForEmit = () =>{
        changeTaskList(store.getStore())
    };
    useEffect(()=>{
        store.addEventListener(callbackForEmit);
        return ()=>{
            store.removeEventListener(callbackForEmit);
        }
    }, []);
    useEffect(() => {
            if(
                localStorage.getItem('tasks')){
                localStorage.getItem('tasks') && changeTaskList( JSON.parse(localStorage.getItem('tasks')));
                console.log('data from LS');
            }
        },
        []
    );

    return(
        <div className="content_wrapper">

           { taskList.map( task => (
               <FadeOutDown>
               <Task
                   task = {task}
                   key = {task.id}
               />
               </FadeOutDown>) )
           }

        </div>

    )

};

export default Tasks;