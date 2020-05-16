import React, {useState, useEffect} from 'react'
import Task from "./Task/Task.jsx";
import styled, { keyframes } from 'styled-components';
import { fadeOutDown } from 'react-animations';
import style from './tasks.module.scss';
import { connect } from 'react-redux';

import {showMore} from "../../../actions/actions";
const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} `;
const Tasks = (props) => {
    //let [taskList, changeTasklist ]= useState(props.taskList); // локальный стейт, для взятия из LocalStorage
    let [isShown, changeIsShown ] = useState(2); // локальная переменная, отображает сколько заданий показывать, по умолчанию 2
    const showMore = () =>  isShown < props.taskList.length ? changeIsShown(isShown += 2): null; // показать еще заданий

    let shownTasks = [...props.taskList]; //
    shownTasks.length = isShown;

    const secondSpanStyles = `${style.icon_right} + ${style.after}`; //Объеденяю стили
    return(
        <div className="content_wrapper">

           {/*{ props.taskList.map( task => (*/}
               {/*<FadeOutDown>*/}
               {/*<Task*/}
                   {/*task = {task}*/}
                   {/*key = {task.id}*/}
                {/*/>*/}
               {/*</FadeOutDown>) )*/}
           {/*}*/}

            { shownTasks.map( task => (
                <FadeOutDown>
                    <Task
                        task = {task}
                        key = {task.id}
                    />
                </FadeOutDown>) )
            }
            <button className={style.explore}
                    onClick={showMore}>
                {isShown >= props.taskList.length ? 'No more tasks' : 'More tasks'}

                <span className={style.icon_right}/>
                <span className={style.secondSpanStyles}/>
            </button>
        </div>

    )

};

export default connect(store => ({
         taskList: store
    })
)(Tasks);