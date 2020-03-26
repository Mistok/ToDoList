import React from 'react'
import {style} from './task.module.scss'
import { faClock, faMapMarkedAlt, faCalendar, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import NewTask from "../../../NewTask/NewTask.jsx";

const FadeInUp = styled.div`animation: 2s ${keyframes`${fadeInUp}`} `;

class Task extends React.Component{

    state = {
        isEdit: false,
    };

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            isEdit: !this.isEdit,
        })
    };

    render(){

        const {id, author, date, time, title, location, text, friends} = this.props.task;

        const {removeTask, editTask} = this.props;
        const {isEdit} = this.state;
        const remove = (id, e) =>{
            removeTask(id, e);
        };
            return(

            <FadeInUp>

                <div className='task_container' data_id={id}>
                    {
                        isEdit ? (
                            <NewTask
                                task = {{id, author, date, time, title, location, text, friends }}
                                editTask = {editTask}
                            />
                        ) : (
                    <>
                   <div className="task_header">
                       <div className='task_header_left'>
                           <img src="../../../../../assets/task_ava.png" alt="Avatar" className="task_photo"/>
                           <span className='task_header_text'>{author}</span>
                       </div>
                       <div className="task_header_right">
                           <a onClick={(e)=> {this.handleChange(e)}} href="#" className='task_delete_icon'><FontAwesomeIcon icon={faEdit}/></a>
                           <a onClick={(e)=> {remove(id, e)}} href="#"><FontAwesomeIcon icon={faTrashAlt}/></a>
                       </div>
                   </div>

                    <div className="task_features_bar">
                        <div className="task_feature_item">
                            <FontAwesomeIcon className='task_feature_icon time' icon={faClock} />
                            <span>{time}</span>
                        </div>
                        <div className="task_feature_item">
                            <FontAwesomeIcon className='task_feature_icon map' icon={faMapMarkedAlt} />
                            <a className='task_feature_map' href={location.map}>{location.locationTitle}</a>
                        </div>
                        <div className="task_feature_item">
                            <FontAwesomeIcon className='task_feature_icon calendar' icon={faCalendar} />
                            <span>Every Friday</span>
                        </div>
                    </div>
                    <div className="task_description">
                        <h1 className="task_description_title">{title}</h1>
                        <p className="task_description_text">{text}</p>
                    </div>
                    <div className="task_friends">
                        <a href="#" className="task_friend_link">
                            <img src="../../../../../assets/friend_1.png" alt="friend_ava" className="task_friend_link_img"/>
                        </a>
                        <a href="#" className="task_friend_link">
                            <img src="../../../../../assets/friend_2.png" alt="friend_ava" className="task_friend_link_img"/>
                        </a>
                        <a href="#" className="task_friend_link">
                            <img src="../../../../../assets/friend_3.png" alt="friend_ava" className="task_friend_link_img"/>
                        </a>
                        <a href="#" className="task_friend_link">
                            <img src="../../../../../assets/friend_4.png" alt="friend_ava" className="task_friend_link_img"/>
                        </a>
                    </div>
                    </>
                    )}
                </div>
            </FadeInUp>
        )
    }
}

export default Task;