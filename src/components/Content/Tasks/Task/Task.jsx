import React from 'react'
import {style} from './task.module.css'
console.log(`style: ${style}`);
class Task extends React.Component{
    render(){
        return(
            <div className="style.task_container">
               <div className="task_header">
                   <div className='task_header_left'>
                       <img src="../../../../../assets/task_ava.png" alt="Avatar" className="task_photo"/>
                       <span className='task_header_text'>Roger Bridges</span>
                   </div>
                   <div className="task_header_right">
                       <a href="#">X Delete</a>
                   </div>
               </div>
                <div className="task_features_bar">
                    <div className="task_feature_item"><i className="fa"></i><span>6:00am</span></div>
                    <div className="task_feature_item"><i className="fa"></i><span>Central Park, NYC</span></div>
                    <div className="task_feature_item"><i className="fa"></i><span>Every Friday</span></div>
                </div>
                <div className="task_description">
                    <h1 className="task_description_title">Training - Excercises</h1>
                    <p className="task_description_text">Trining with some friends at Central Park New York City, taking 1 hour and 30 minutes to do it all kind of exercises.</p>
                </div>
                <div className="task_friends">
                    <a href="" className="task_friend_link">
                        <img src="../../../../../assets/friend_1.png" alt="friend_ava" className="task_friend_link_img"/>
                    </a>
                    <a href="" className="task_friend_link">
                        <img src="../../../../../assets/friend_2.png" alt="friend_ava" className="task_friend_link_img"/>
                    </a>
                    <a href="" className="task_friend_link">
                        <img src="../../../../../assets/friend_3.png" alt="friend_ava" className="task_friend_link_img"/>
                    </a>
                    <a href="" className="task_friend_link">
                        <img src="../../../../../assets/friend_4.png" alt="friend_ava" className="task_friend_link_img"/>
                    </a>
                </div>

            </div>

        )
    }
}

export default Task;