import React from 'react'
import Calendar from "./Calendar/Calendar.jsx";
import Tasks from "./Tasks/Tasks.jsx";
import {style} from './content.module.scss';

const styles = {
    position: 'relative',
    margin: '50px auto'
};

class Content extends React.Component{

    render(){
        return(
            <div className="content_wrapper">
                <div className="container">
                    <div className='content_container'>
                        <div className="content_calendar">
                            <Calendar style={styles} width='420px' />
                        </div>

                        <div className='content_tasks'>
                            <Tasks tasks={this.props.tasks} removeTask={this.props.removeTask} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Content;