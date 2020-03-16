import React from 'react'
import {style} from './navigation.scss'

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <div className='container'>
                    <div className="nav_wrapper">
                        <div className="nav_panel">
                            <a href='#' title='nav-link' className="nav_item">
                                <span className="nav_item_name"> Today</span>
                                <span className="nav_item_count">3</span>
                            </a>
                            <a href='#' title='nav-link' className="nav_item">
                                <span className="nav_item_name">Sheduled Events</span>
                                <span className="nav_item_count">5</span>
                            </a>
                            <a href='#' title='nav-link' className="nav_item">
                                <span className="nav_item_name">New checking</span>
                                <span className="nav_item_count">2 </span>
                            </a>
                        </div>
                        <div className='dvs'>
                            <a href="#" className='new_task_btn'>New task</a>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Nav;