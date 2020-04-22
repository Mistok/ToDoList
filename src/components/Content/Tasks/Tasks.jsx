import React from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';



const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} `;

class Tasks extends React.Component{

    state  = {
        showForm: false
    };

    render(){
        const {tasks, removeTask, tasksEditTask} = this.props;
        console.log(tasks);
        debugger
        return(
            <div className="content_wrapper">

                   { tasks.map( task => (<Task task = {task} key = {task.id} removeTask = {removeTask} editTask = {tasksEditTask}/>) ) }

            </div>

        )
    }
}

export default Tasks;