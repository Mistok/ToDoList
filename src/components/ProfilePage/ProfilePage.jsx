import React from 'react';
import style from './profilePage.scss';

const ProfilePage = () => {
    return(<section>
            <div className='container'>
               <div className={style.profile_container}>
                   <img src="../../../assets/ava.png" alt="ava" className="ava"/>
                   <span>Roger Bridges</span>
               </div>
            </div>
        </section>

    )
};
export default ProfilePage;