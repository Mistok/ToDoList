import React from 'react'
import {style} from './navigation.scss'

class Nav extends React.Component{
    constructor(){
        super();
        this.state = {
            formShown: false,
        }
    }
    render(){



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
                                <span className="nav_item_count">2 </span>
                            </a>
                        </div>
                        <div className='dvs'>
                            <a href="#" className='new_task_btn'>New task</a>
                        </div>
                    </div>
                    <div className="formContainer">
                        <form className='add_task_form' action="#">
                            <label htmlFor="add_title" className='add_title'>
                                <span>Task title</span>
                                <input id='add_title' type="text" />
                            </label>
                            <div className="add_devider">
                                <div className="add_left_col">
                                    <label htmlFor="add_data">
                                        <span>Add date</span>
                                        <input id='add_data' type="date"/>
                                    </label>
                                    <label htmlFor="add_time">
                                        <span>Add time</span>
                                        <input id='add_time' type="time"/>
                                    </label>
                                    <label htmlFor="add_location">
                                        <span>Add place</span>
                                        <input id='add_location' type="text" />
                                    </label>
                                </div>
                                <div className="add_right_col">
                                    <label htmlFor="add_text">
                                        <span>Add task description</span>
                                        <textarea placeholder='task description here'/>
                                    </label>
                                    <label htmlFor="add_friend_select" >
                                        <span className='add_friend_select_label'>Add friends</span>
                                        <select name="add_friend_select" id="add_friend_select" >
                                            <option value="" selected='selected'>none</option>
                                            <option value="sara">Sara</option>
                                            <option value="david">David</option>
                                            <option value="eddie">Eddie</option>
                                            <option value="john">John</option>
                                            <option value="alice">Alice</option>
                                            <option value="roger">Roger</option>
                                            <option value="dinesh">Dinesh</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </nav>
        )
    }
}

export default Nav;