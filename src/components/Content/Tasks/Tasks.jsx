import React, {useState} from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';

import store from "../../../store/store"

const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} `;


const Tasks = (props) => {

    const [taskList, changeTaskList] = useState(store.getStore());


    const {tasks, removeTask, tasksEditTask} = taskList;

    return(
        <div className="content_wrapper">

           { taskList.map( task => (
               <Task
                   task = {task}
                   key = {task.id}
                   removeTask = {removeTask}
                   editTask = {tasksEditTask}/>) )
           }

        </div>

    )

};

export default Tasks;