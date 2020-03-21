import React from 'react'
import {style} from './newTask.scss'
import addNewTask from '../../Static/state.js'

class NewTask extends React.Component{
    constructor(){
        super();

        this.state = {
            newTask: {
                id: '',
                author: '',
                date: ':',
                time: '',
                title: '',
                location: {
                    locationTitle: 'somewhere in Kiev',
                    map: '#'
                },

                text: '',
                friends: [{
                    name: '',
                    avatar: ''
                },]
            }
        }
    }

    add

    render(){
        let newTaskTitle = React.createRef();
        let newTaskDate = React.createRef();
        let newTaskTime = React.createRef();
        let newTaskPlace = React.createRef();
        let newTaskText = React.createRef();

        let createNewTask = (event) => {
            event.preventDefault();
            let newTask = {
                id: newTaskTitle.current.value,
                author: 'Roger Briges',
                date: newTaskDate.current.value,
                time: newTaskTime.current.value,
                title: newTaskTitle.current.value,
                location: {
                    locationTitle: newTaskPlace.current.value,
                    map: '#'
                },

                text: newTaskText.current.value,
                friends: [{
                    name: '',
                    avatar: ''
                },]
            };
            debugger;
            console.dir(newTask);
            addNewTask(newTask);

        };

        return(
            <div className="formContainer">
                <form className='add_task_form' action="#">
                    <label htmlFor="add_title" className='add_title'>
                        <span>Task title</span>
                        <input id='add_title' type="text" ref={newTaskTitle} required/>
                    </label>
                    <div className="add_devider">
                        <div className="add_left_col">
                            <label htmlFor="add_data">
                                <span>Add date</span>
                                <input id='add_data' type="date" ref={newTaskDate} required/>
                            </label>
                            <label htmlFor="add_time">
                                <span>Add time</span>
                                <input id='add_time' type="time" ref={newTaskTime} required/>
                            </label>
                            <label htmlFor="add_location">
                                <span>Add place</span>
                                <input id='add_location' ref={newTaskPlace} type="text" />
                            </label>
                        </div>
                        <div className="add_right_col">
                            <label htmlFor="add_text">
                                <span>Add task description</span>
                                <textarea placeholder='task description here' ref={newTaskText}/>
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
                            <input onClick={createNewTask} className='add_submit_btn' htmlFor="add_task_form" type="submit" value='Add task'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default NewTask;