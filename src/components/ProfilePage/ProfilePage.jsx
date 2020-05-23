import React from 'react';
import style from './profilePage.scss';
import {fadeInDownBig} from "react-animations";
import styled, { keyframes } from 'styled-components';


const ProfilePage = () => {

    const FadeInDownBig= styled.div`animation: .75s ${keyframes`${fadeInDownBig}`} `;
    return(<FadeInDownBig>
        <section>
            <div className='container'>
               <div className={style.profile_container}>
                   <div className={style.profile_header}>
                       <img src="../../../assets/ava.png" alt="ava" className="ava"/>
                       <span>Roger Bridges</span>
                   </div>
                   <div className={style.profile_content}>
                        <div className={style.profile_age}>
                            <div className={style.profile_left_col}>
                                <span>age</span>
                            </div>
                            <div className={style.profile_right_col}>
                                29
                            </div>
                        </div>
                       <div className={style.profile_location}>
                           <div className={style.profile_left_col}>
                               <span>location</span>
                           </div>
                           <div className={style.profile_right_col}>
                               Ukraine
                           </div>
                       </div>
                       <div className={style.profile_about}>
                           <div className={style.profile_left_col}>
                               <span>about</span>
                           </div>
                           <div className={style.profile_right_col}>
                               Aenean a imperdiet justo, ut porta sem. Nullam laoreet mollis ligula, non tincidunt massa tempus at. Pellentesque at volutpat orci. Aliquam erat volutpat. Fusce commodo placerat nibh, ornare volutpat enim. Curabitur id aliquet erat, vitae tincidunt arcu. Duis sapien purus, convallis ut sodales nec, iaculis et nunc. Phasellus suscipit mi in sapien auctor, vel lacinia metus malesuada.
                           </div>
                       </div>
                   </div>

               </div>
            </div>
        </section>
        </FadeInDownBig>
    )
};
export default ProfilePage;