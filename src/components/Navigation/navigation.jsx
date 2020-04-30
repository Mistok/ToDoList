import React, {useState} from 'react'
import style from './navigation.scss'
import NewTask from "../NewTask/NewTask.jsx";

const Nav = (props) => {

    const [isFormShown, changeIsFormShown ] = useState(false) ;

    // Показать / скрыть форму для нового задания

    const newTaskToggler = (event) => {
        event.preventDefault();

        changeIsFormShown(!isFormShown);
    };

    return(
        <nav>
            <div className='container'>
                <div className={style.nav_wrapper}>
                    <div className={style.nav_panel}>
                        <a href='#' title='nav-link' className={style.nav_item}>
                            <span className={style.nav_item_name}> Today</span>
                            <span className={style.nav_item_count}>3</span>
                        </a>
                        <a href='#' title='nav-link' className={style.nav_item}>
                            <span className={style.nav_item_name}>Sheduled Events</span>
                            <span className={style.nav_item_count}>5</span>
                        </a>
                        <a href='#' title='nav-link' className={style.nav_item}>
                            <span className={style.nav_item_name}>New checking</span>
                            <span className={style.nav_item_count}>2</span>
                        </a>
                    </div>
                    <div className='dvs'>
                        <a href="#" className={style.new_task_btn} onClick={newTaskToggler}>New task</a>
                    </div>
                </div>
                {isFormShown ? <NewTask addNewTask={props.addNewTask} task = {''}/> : null}
            </div>
        </nav>
    )

};

export default Nav;
