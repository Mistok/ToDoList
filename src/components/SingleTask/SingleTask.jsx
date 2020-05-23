import React from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import Task from "../Content/Tasks/Task/Task.jsx";

const SingleTask =  (props) =>{
    const {taskId} = useParams();
    const task = props.taskList.find(task => task.id === +taskId);
    return(
        <div className="content_wrapper">
            {task ? <Task task = {task} /> : <h1> 404 no such task found </h1>}
        </div>
    )
};


export default connect(store => ({
        taskList: store
    })
)(SingleTask);