
import React from 'react';
import style from './header.scss';
import {NavLink} from 'react-router-dom'


const Header = () => {

    return(<header>
            <div className='container'>
                <div className={style.header_container}>
                    <div className={style.logo_container}>
                        <NavLink to='/' activeClassName={style.active_link}>
                            <img className={style.logo} src="../../../assets/logo.png" alt="Logo"/>
                        </NavLink>
                        <NavLink to='/tasks' activeClassName={style.active_link}>
                            <span>Tasks</span>
                        </NavLink>
                    </div>
                    <div className={style.menu}>
                        <input className={style.search_field}  type="text" onClick={console}/>
                        <NavLink to='/registration' activeClassName={style.active_link}>
                            <span className={style.register_link}>Register</span>
                        </NavLink>
                        <NavLink to='/profile' activeClassName={style.active_link}>
                            <img className={style.profile_ava}  src="../../../assets/ava.png" alt="ava"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>

    )
};
export default Header;