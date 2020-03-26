import React from 'react'
import {style} from './navigation.scss'
import NewTask from "../NewTask/NewTask.jsx";

class Nav extends React.Component{
    constructor(){
        super();
        this.state = {
            formShown: true,
        }
    }
    newTaskToggler = (event) => {
        event.preventDefault();
        const {formShown} = this.state;
        this.setState({formShown: !formShown});
    };
    render(){
        const {formShown} = this.state;
        return(
            <nav>
                <div className='container'>
                    <div className="nav_wrapper">
                        <div className="nav_panel">
                           <a href='#' title='nav-link' className="nav_item">
                                <span className="nav_item_name"> Today</span>
                                <span className="nav_item_count">3</span>
                            </a>
                            <a href='#' title='nav-link' className="nav_item">
                                <span className="nav_item_name">Sheduled Events</span>
                                <span className="nav_item_count">5</span>
                            </a>
                            <a href='#' title='nav-link' className="nav_item">
                                <span className="nav_item_name">New checking</span>
                                <span className="nav_item_count">2</span>
                            </a>
                        </div>
                        <div className='dvs'>
                            <a href="#" className='new_task_btn' onClick={this.newTaskToggler}>New task</a>
                        </div>
                    </div>
                        {formShown ? <NewTask addNewTask={this.props.addNewTask} task = {''}/> : null}
                </div>
            </nav>
        )
    }
}

export default Nav;