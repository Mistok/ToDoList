import React from 'react'
import {style} from './newTask.scss'

class NewTask extends React.Component{

    render(){
        return(
            <div className="formContainer">
                <form className='add_task_form' action="#">
                    <label htmlFor="add_title" className='add_title'>
                        <span>Task title</span>
                        <input id='add_title' type="text" required/>
                    </label>
                    <div className="add_devider">
                        <div className="add_left_col">
                            <label htmlFor="add_data">
                                <span>Add date</span>
                                <input id='add_data' type="date" required/>
                            </label>
                            <label htmlFor="add_time">
                                <span>Add time</span>
                                <input id='add_time' type="time" required/>
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
                            <input className='add_submit_btn' htmlFor="add_task_form" type="submit" value='Add task'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default NewTask;