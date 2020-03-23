import React from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';



const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`}  infiniti`;

class Tasks extends React.Component{

    constructor(){
        super();
        this.state  = {
            showForm: false
        }
    }
    render(){
        return(
            <div className="content_wrapper">

               <FadeOutDown>
                   { this.props.tasks.map( task => (<Task task = {task} key = {task.id}/>) ) }
               </FadeOutDown>
            </div>

        )
    }
}

export default Tasks;