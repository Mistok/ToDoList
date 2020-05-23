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
         taskList: store
    })
)(Tasks);