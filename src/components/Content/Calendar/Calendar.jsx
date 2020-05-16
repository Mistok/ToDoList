import React from 'react';
import style from './calendar.module.scss';
import moment from 'moment';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Calendar extends React.Component{

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null
    };

    constructor(props) {
        super(props);

    }


    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

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
        return this.state.dateContext.get("date");
    };
    currentDay = () => {
        return this.state.dateContext.format("D");
    };

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    };

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    };

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    };

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    };

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();
    };
    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e)=> {this.onSelectChange(e, data)}}>
                        {data}
                    </a>
                </div>
            );
        });

        return (
            <div className={style.month_popup}>
                {popup}
            </div>
        );
    };

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    };

    MonthNav = () => {
        return (
            <span className={style.label_month}
                  onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                <this.SelectList data={this.months} />
                }
            </span>
        );
    };

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    };

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    };
    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    };

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    };

    YearNav = () => {
        return (
            this.state.showYearNav ?
                <input
                    defaultValue = {this.year()}
                    className={style.editor_year}
                    ref={(yearInput) => { this.yearInput = yearInput}}
                    onKeyUp= {(e) => this.onKeyUpYear(e)}
                    onChange = {(e) => this.onYearChange(e)}
                    type="number"
                    placeholder="year"/>
                :
                <span
                    className={style.label_year}
                    onDoubleClick={(e)=> { this.showYearEditor()}}>
                {this.year()}
            </span>
        );
    };

    onDayClick = (e, day) => {
        this.setState({
            selectedDay: day
        }, () => {
            //console.log("SELECTED DAY: ", this.state.selectedDay);
        });

        this.props.onDayClick && this.props.onDayClick(e, day);
    };

    render(){

        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <>
                {/*<td key={day} className="week-day">{day}</td>*/}
                    <div key={day} className={style.week_day_container}>{day}</div>
                </>
                )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(
                //<td key={i * 80} className="emptySlot">{""}</td>
            );
        }

        let daysInMonth = [];
        let curDay = style.current_day + '  ' +  style.day;

        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? curDay : style.day);
            let selectedClass = (d == this.state.selectedDay ? style.selected_day : "");
            daysInMonth.push(
                <div className={className + selectedClass}>
                    <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
                </div>
            );
        }


        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <div className={style.table_row} key={i*100}>
                    {d}
                </div>
            );
        });
        return(


               <div className={style.calendar_container}>

                       <div className={style.calendar_wrapper}>

                           <div className={style.calendar_header}>

                               <FontAwesomeIcon className={style.calendar_month_left} icon={faChevronLeft} onClick={(e)=> {this.prevMonth()}}/>

                               <div>
                                   <this.MonthNav />
                                   {" "}
                                   <this.YearNav />
                               </div>

                               <FontAwesomeIcon className={style.calendar_month_right} icon={faChevronRight} onClick={(e)=> {this.nextMonth()}}/>

                           </div>

                           <div className={style.calendar_days}>
                               <div className={style.week_day_container}>
                                   {weekdays}
                               </div>
                                {trElems}
                           </div>
                       </div>
                   </div>



        )
    }
}

export default Calendar;