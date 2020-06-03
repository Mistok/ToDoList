import React from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import Task from "../Content/Tasks/Task/Task.jsx";

import style from './singleTask.scss'

const SingleTask =  (props) =>{

    const {taskId} = useParams();

    const task = props.taskList.find(task => task.id === +taskId);

    const container_style = `${style.single_task} + container`;
    return(
        <div className={container_style}>
            {task ? <Task className={style.single_task} task = {task} /> : <h1> No such task found </h1>}
        </div>
    )
};


export default connect(store => ({
        taskList: store.tasks
    })
)(SingleTask);