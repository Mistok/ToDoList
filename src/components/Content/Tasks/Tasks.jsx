import React, {useState} from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';
import style from './tasks.module.scss';
import { connect } from 'react-redux';

const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} `;

const Tasks = (props) => {

    let [shownCount, changeShownCount ] = useState(2); // локальная переменная, отображает сколько заданий показывать, по умолчанию 2
    const showMore = () =>  shownCount < props.taskList.length ? changeShownCount(shownCount +=2): null; // показать еще заданий
    let filter = props.filter;
    if( filter !== 'all' || filter !== false) {
        let today = new Date;
        let todayYear =  today.getFullYear();
        let todayMonth = today.getMonth();
        let todayDay = today.getDay();

        let filtredTaskList = [];

        switch (filter) {
            case 'today': {


                for (let task of props.taskList) {
                    let taskDate =  task.date;
                    let taskYear = taskDate.getFullYear();
                    let taskMonth = taskDate.getMonth();
                    let taskDay = taskDate.getDay();
                    if(todayYear === taskYear && todayMonth === taskMonth && todayDay || taskDay){
                        filtredTaskList.push(task)
                    }
                }

            }
        }
    }
    let todayDay = new Date.getday();
    console.log(todayDay);
    let shownTasks = [...props.taskList]; //
    shownTasks.length = shownCount;

    const secondSpanStyles = `${style.icon_right} + ${style.after}`; //Объеденяю стили
    return(
        <div className="content_wrapper">

            { shownTasks.map( task => (

                <Task
                    task = {task}
                    key = {task.id}
                />
) )
            }
            <button className={style.explore}
                    onClick={showMore}>
                {shownCount >= props.taskList.length ? 'No more tasks' : 'More tasks'}

                <span className={style.icon_right}/>
                <span className={secondSpanStyles}/>
            </button>
        </div>

    )

};

export default connect(store => ({
        taskList: store.tasks,
        filter: store.filter
    })
)(Tasks);