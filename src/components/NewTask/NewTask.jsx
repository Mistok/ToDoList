import React, {useState} from 'react'
import style from './newTask.scss'
import {connect} from 'react-redux';

import { slideInDown } from 'react-animations';

import styled, { keyframes } from 'styled-components';

import {updateTask, addTask} from "../../actions/actions";

const SlideInDown = styled.div`animation: .8s ${keyframes`${slideInDown}`} `;


const NewTask = (props) => {

    // имитация стейта для использования в хуке
    let mockupTask = {
        id: props.task.id || Date.now(),
        author: 'Roger Bridges',
        date: props.task.date || '',
        time: props.task.time || '',
        title: props.task.title || '',
        location: props.task.location || '',
        text: props.task.text || '',
        friends: [{
            name: '',
            avatar: ''
        },]
    };

    let [newTask, setNewTask] = useState(mockupTask);

    // очистка формы
    const clearForm = () => {
        setNewTask({
            id: Date.now(),
            author: 'Roger Bridges',
            date: ':',
            time: '',
            title: '',
            location:  'somewhere in Kiev',
            text: '',
            friends: [{
                name: '',
                avatar: ''
            },]
        })
    };
    // отправка нового таска


    const handleSubmit = (e) => {
        e.preventDefault();
        // let newATask = {
        //     ...newTask,
        //     id: props.id ? props.id : Date.now()
        // };


        if(props.task){
            props.updateTask(newTask);
            //clearForm();
        } else {
            // если мы создаем новую таску, то добавляем ID
            setNewTask({...newTask, id: Date.now()});
            props.addTask(newTask)
        }
        clearForm()
    };



    // Изменение в стейте при изменение полей ввода

    const onChange = (e) =>{
        setNewTask({...newTask, [e.target.name]: e.target.value})
    };

    const {id, author, location, date, time, title, text} = newTask;

    return(

            <div className={style.formContainer}>
                <SlideInDown>
                <form onSubmit={handleSubmit} className={style.add_task_form} action="#">
                    <label htmlFor="add_title" className={style.add_title}>
                        <span>Task title</span>
                        <input onChange={onChange} id={style.add_title} name="title" type="text"  value={title} required/>
                    </label>
                    <div className={style.add_devider}>
                        <div className={style.add_left_col}>
                            <label htmlFor="add_data">
                                <span>Add date</span>
                                <input onChange={onChange} id="add_data" name="date" type="date"  value={date} />
                            </label>
                            <label htmlFor="add_time">
                                <span>Add time</span>
                                <input onChange={onChange} id="add_time" type="time" name='time' value={time} />
                            </label>
                            <label htmlFor="add_location">
                                <span>Add place</span>
                                <input onChange={onChange} id='add_location' name='location' value={location} type="text" />
                            </label>
                        </div>
                        <div className={style.add_right_col}>
                            <label htmlFor="add_text">
                                <span>Add task description</span>
                                <textarea onChange={onChange} placeholder='task description here' name='text' value={text} />
                            </label>
                            <label htmlFor="add_friend_select" >
                                <span className={style.add_friend_select_label}>Add friends</span>
                                <select name="add_friend_select" id="add_friend_select" >
                                    <option value="" defaultValue='selected'>none</option>
                                    <option value="sara">Sara</option>
                                    <option value="david">David</option>
                                    <option value="eddie">Eddie</option>
                                    <option value="john">John</option>
                                    <option value="alice">Alice</option>
                                    <option value="roger">Roger</option>
                                    <option value="dinesh">Dinesh</option>
                                </select>
                            </label>
                            <input onSubmit={handleSubmit} className={style.add_submit_btn} htmlFor="add_task_form" type="submit" value='Add task'/>
                        </div>
                    </div>
                </form>
                </SlideInDown>
            </div>

    )
};
export default connect(null, {addTask, updateTask})(NewTask);

