import React, {useEffect, useState} from 'react'

import style from './task.module.scss'
import { faClock, faMapMarkedAlt, faCalendar, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import NewTask from "../../../NewTask/NewTask.jsx";
import {removeTask} from "../../../../actions/actions";
import dispatcher from '../../../../dispatcher/dispatcher';

const FadeInUp = styled.div`animation: 2s ${keyframes`${fadeInUp}`} `;

const Task = (props) => {

    const [isEdit, changeIsEdit] = useState(false);

    // handleChange left for prevent default action
    const handleChange = (e) =>{
        e.preventDefault();
        changeIsEdit(true);
    };
    useEffect(()=>{
        changeIsEdit(false);
    },[props.task]);
    // styles
    const stylesMap = style.task_feature_icon + ' ' + style.map;
    const stylesCalendar = style.task_feature_icon + ' ' + style.calendar;
    const stylesTime = style.task_feature_icon + ' ' + style.time;

    // parsing props task features
    const {id, author, date, time, title, location, text, friends} = props.task;

    return(

    <FadeInUp>

        <div className={style.task_container} data_id={id}>
            {
                isEdit ? (
                    <NewTask
                        task = {{id, author, date, time, title, location, text, friends }}
                    />
                ) : (
            <>
           <div className={style.task_header}>
               <div className={style.task_header_left}>
                   <img src="../../../../../assets/task_ava.png" alt="Avatar" className={style.task_photo}/>
                   <span className={style.task_header_text}>{author}</span>
               </div>
               <div className={style.task_header_right}>
                   <a onClick={(e)=> {handleChange(e)}} href="#" className={style.task_delete_icon}><FontAwesomeIcon icon={faEdit}/></a>
                   <a onClick={(e)=> {removeTask(id,e)}} href="#"><FontAwesomeIcon icon={faTrashAlt}/></a>
               </div>
           </div>

            <div className={style.task_features_bar}>
                <div className={style.task_feature_item}>
                    <FontAwesomeIcon className={stylesTime} icon={faClock} />
                    <span>{time}</span>
                </div>
                <div className={style.task_feature_item}>
                    <FontAwesomeIcon className={stylesMap} icon={faMapMarkedAlt} />
                    <a className={style.task_feature_map} href={`https://maps.google.com?saddr=Current+Location&${location}`}>{location}</a>
                </div>
                <div className={style.task_feature_item}>
                    <FontAwesomeIcon className={stylesCalendar} icon={faCalendar} />
                    <span>{date ? date : 'Every day'}</span>
                </div>
            </div>
            <div className={style.task_description}>
                <h1 className={style.task_description_title}>{title}</h1>
                <p className={style.task_description_text}>{text}</p>
            </div>
            <div className={style.task_friends}>
                <a href="#" className={style.task_friend_link}>
                    <img src="../../../../../assets/friend_1.png" alt="friend_ava" className={style.task_friend_link_img}/>
                </a>
                <a href="#" className={style.task_friend_link}>
                    <img src="../../../../../assets/friend_2.png" alt="friend_ava" className={style.task_friend_link_img}/>
                </a>
                <a href="#" className={style.task_friend_link}>
                    <img src="../../../../../assets/friend_3.png" alt="friend_ava" className={style.task_friend_link_img}/>
                </a>
                <a href="#" className={style.task_friend_link}>
                    <img src="../../../../../assets/friend_4.png" alt="friend_ava" className={style.task_friend_link_img}/>
                </a>
            </div>
            </>
            )}
        </div>
    </FadeInUp>

    )
};

export default Task;