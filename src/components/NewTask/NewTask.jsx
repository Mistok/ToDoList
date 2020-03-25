import React from 'react'
import {style} from './newTask.scss'

import { slideInDown } from 'react-animations';

import styled, { keyframes } from 'styled-components';
const SlideInDown = styled.div`animation: .8s ${keyframes`${slideInDown}`} `;

class NewTask extends React.Component{
    constructor(){
        super();
        this.state = {
            id: '',
            author: 'Roger Bridges',
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
    clearForm = () => {

        this.setState(this.state = {
            id: '',
            author: 'Roger Bridges',
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

        })
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        let {author, date, time, title, location, text, friends} = this.state;

        let newTask = {
            id: Date.now(),
            author,
            date,
            time,
            title,
            location,
            text,
            friends,
        };
        this.props.addNewTask(newTask);
        this.clearForm()

    };
    onChangeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render(){

        const {id, author, location, date, time, title, text} = this.state;

        return(
            <SlideInDown>
                <div className="formContainer">
                    <form onSubmit={this.handleSubmit} className='add_task_form' action="#">
                        <label htmlFor="add_title" className='add_title'>
                            <span>Task title</span>
                            <input onChange={this.onChangeHandle} id='add_title' name="title" type="text"  value={title} required/>
                        </label>
                        <div className="add_devider">
                            <div className="add_left_col">
                                <label htmlFor="add_data">
                                    <span>Add date</span>
                                    <input onChange={this.onChangeHandle} id="add_data" name="date" type="date"  value={date} required/>
                                </label>
                                <label htmlFor="add_time">
                                    <span>Add time</span>
                                    <input onChange={this.onChangeHandle} id="add_time" type="time" name='time' value={time} required/>
                                </label>
                                <label htmlFor="add_location">
                                    <span>Add place</span>
                                    <input onChange={this.onChangeHandle} id='add_location' name='location' value={location.locationTitle} type="text" />
                                </label>
                            </div>
                            <div className="add_right_col">
                                <label htmlFor="add_text">
                                    <span>Add task description</span>
                                    <textarea onChange={this.onChangeHandle} placeholder='task description here' name='text' value={text} />
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
                                <input onSubmit={this.handleSubmit} className='add_submit_btn' htmlFor="add_task_form" type="submit" value='Add task'/>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideInDown>
        )
    }
}
export default NewTask;

