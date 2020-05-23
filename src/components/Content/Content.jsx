import React from 'react'
import Calendar from "./Calendar/Calendar.jsx";
import Tasks from "./Tasks/Tasks.jsx";
import style from './content.module.scss';
import Nav from "../Navigation/navigation.jsx";
import {useParams} from 'react-router-dom';

const styles = {
    position: 'relative',
    margin: '50px auto'
};

const Content = () => {
    const params = useParams();

    return(

        <div className={style.content_wrapper}>
            <Nav/>
            <div className="container">

                <div className={style.content_container}>
                    <div className={style.content_calendar}>
                        <Calendar style={styles}  />
                    </div>

                    <div className={style.content_tasks}>
                        <Tasks/>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default Content;