import React from 'react'
import Task from "./Task/Task.jsx";

class Tasks extends React.Component{
    render(){
        return(
            <div className="content_wrapper">

                    <Task/>
                    <Task/>
                    <Task/>
            </div>

        )
    }
}

export default Tasks;