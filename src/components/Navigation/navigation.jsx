import React, {useState} from 'react'
import style from './navigation.scss'
import NewTask from "../NewTask/NewTask.jsx";
import { connect } from 'react-redux';
import {filterToday, filterPass, filterScheduled, filterAll} from '../../actions/actions.js'

const Nav = (props) => {

    const [isFormShown, changeIsFormShown ] = useState(false) ;

    // Показать / скрыть форму для нового задания
    
    const filterHandle = (e) =>{
        e.preventDefault();

        console.log(e.currentTarget.dataset.filter);
        console.log(props.filter)
        switch (e.currentTarget.dataset.filter) {
            case 'all':
                props.filterAll('ALL');
                break;
            case 'passed':
                props.filterPass('PASS');
                break;
            case 'scheduled':
                props.filterPass('SCHEDULED');
                break;
            case 'today':
                props.filterPass('TODAY');
                break;
        }

    };
    
    const newTaskToggler = (event) => {
        event.preventDefault();

        changeIsFormShown(!isFormShown);
    };

    return(
        <nav>
            <div className='container'>
                <div className={style.nav_wrapper}>
                    <div className={style.nav_panel}>
                        <a href='#' onClick={(e)=>filterHandle(e)} data-filter="all" title='nav-link' className={style.nav_item}>
                            <span className={style.nav_item_name}>All tasks</span>
                            {/*<span className={style.nav_item_count}>3</span>*/}
                        </a>
                        <a href='#' onClick={filterHandle} data-filter="today"  title='nav-link' className={style.nav_item}>
                            <span className={style.nav_item_name}>Today</span>
                            {/*<span className={style.nav_item_count}>2</span>*/}
                        </a>
                        <a href='#' onClick={filterHandle} data-filter="passed"  title='nav-link' className={style.nav_item}>
                            <span className={style.nav_item_name}>Passed</span>
                            {/*<span className={style.nav_item_count}>5</span>*/}
                        </a>
                        <a href='#' onClick={filterHandle} data-filter="scheduled"  title='nav-link' className={style.nav_item}>
                            <span className={style.nav_item_name}>Scheduled</span>
                            {/*<span className={style.nav_item_count}>2</span>*/}
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

export default connect(store => ({taskList: store.tasks, filter: store.filter}), {filterToday, filterPass, filterScheduled, filterAll })(Nav);
