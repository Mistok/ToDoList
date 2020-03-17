import React from 'react';
import {Styles} from './calendar.module.scss';
import moment from 'moment';

class Calendar extends React.Component{

    constructor(props){
        super(props);
        this.width = props.width || '350px';
        this.style = props.style || {};
        this.state = {
            dateContext: moment(),
            today: moment(),
            showMonthPopup: false,
            showYearPopup: false,
            selectedDay: null
        };
        this.weacdays = moment.weekdays();
        this.weackdaysShort = moment.weekdaysShort();
        this.month = moment.months();
    };
    /*
    year = () => {
        return this.state.dateContext.format("Y");
    };
    month = () => {
        return this.state.dateContext.format("MMMM");
    };
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    };
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    };
    currentDay = () => {
        return this.state.dateContext.format("D");
    };
    */
    render(){

        
        return(
            <div className="content_wrapper">
                <div className="container">
                   <div className="calendar_container">
                        <h2 className='calendar_title'>
                            Calendar
                        </h2>
                   </div>
                </div>
            </div>

        )
    }
}

export default Calendar;