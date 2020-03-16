import React from 'react'
import Calendar from "./Calendar/Calendar.jsx";
import Tasks from "./Tasks/Tasks.jsx";
import {style} from './content.module.scss';

class Content extends React.Component{
    render(){
        return(
            <div className="content_wrapper">
                <div className="container">
                    <div className='content_container'>
                        <div className="content_calendar"><Calendar/></div>

                        <div className='content_tasks'><Tasks /></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Content;