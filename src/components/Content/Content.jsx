import React from 'react'
import Calendar from "./Calendar/Calendar.jsx";
import Tasks from "./Tasks/Tasks.jsx";
import style from './content.module.scss';

const styles = {
    position: 'relative',
    margin: '50px auto'
};

const Content = (props) => {

    return(
        <div className={style.content_wrapper}>
            <div className="container">
                <div className={style.content_container}>
                    <div className={style.content_calendar}>
                        <Calendar style={styles} width='420px' />
                    </div>

                    <div className={style.content_tasks}>
                        <Tasks
                            tasks = { props.tasks }
                            removeTask = { props.removeTask }
                            tasksEditTask = { props.contentEditTask }
                        />
                    </div>
                </div>
            </div>
        </div>

    )

};

export default Content;