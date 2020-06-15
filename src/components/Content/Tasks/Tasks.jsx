import React, {useState} from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';
import style from './tasks.module.scss';
import { connect } from 'react-redux';

const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} `;

const Tasks = (props) => {

    let [shownCount, changeShownCount ] = useState(2); // локальная переменная, отображает сколько заданий показывать, по умолчанию 2
    //let [filtredList, changeFiltredList] = useState([]);
    let  [filter, changeFilter] = useState(props.filter);
    const showMore = () =>  shownCount < props.taskList.length ? changeShownCount(shownCount +=2): null; // показать еще заданий

    //let filter = props.filter.filter_type;
    let filteredTaskList = [];
    let filterFunction = (filter) => {

        let today = new Date;
        let todayYear =  today.getFullYear();
        let todayMonth = today.getMonth()+1;
        let todayDay = today.getDay();

        switch (filter) {
            case 'today': {
                console.log('TODAY filter is runnig');
                props.taskList.forEach((task) => {

                    let taskDate = task.date;
                    let taskYear = +taskDate.slice(0, 4);
                    let taskMonth = +taskDate.slice(5, 7);
                    let taskDay = +taskDate.slice(8, 10);

                    if (todayYear === taskYear && todayMonth === taskMonth && todayDay === taskDay) {
                        filteredTaskList.push(task)
                    }
                    console.log(filteredTaskList)
                });

                break
            }
            case 'passed':  {
                console.log('PASSED filter is runnig');
                props.taskList.forEach((task) => {

                    let taskDate = task.date;
                    let taskYear = +taskDate.slice(0, 4);
                    let taskMonth = +taskDate.slice(5, 7);
                    let taskDay = +taskDate.slice(8, 10);

                    if (todayYear >= taskYear && todayMonth >= taskMonth && todayDay > taskDay) {
                        debugger
                        filteredTaskList.push(task)
                    }
                    console.log(filteredTaskList)
                });
                break
            }
            case 'scheduled': {
                console.log('SCHEDULED filter is runnig');
                props.taskList.forEach((task)=>{

                    let taskDate =  task.date;
                    let taskYear = +taskDate.slice(0,4);
                    let taskMonth = +taskDate.slice(5,7);
                    let taskDay = +taskDate.slice(8,10);

                    if(todayYear <= taskYear && todayMonth <= taskMonth && todayDay <= taskDay){
                        filteredTaskList.push(task)
                    }
                    console.log(filteredTaskList)
                });
                break
            }
        }

    };
    if (filter !== 'all' || filter !== false){
        filterFunction(filter.filter_type)
    }
    debugger
    //changeFiltredList([...filtredTaskList]);
    let shownTasks = filter.filter_type !== null ? filteredTaskList : [...props.taskList]; // отображаемые задания
    shownTasks.length = shownCount; // применяем фильтр отображать по 2 задания

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