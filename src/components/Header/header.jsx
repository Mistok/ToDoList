
import React from 'react';
import style from './header.scss';
import {Link} from 'react-router-dom'
const Header = () => {
    return(<header>
            <div className='container'>
                <div className={style.header_container}>
                    <div className={style.logo_container}>
                        <img className={style.logo} src="../../../assets/logo.png" alt="Logo"/>
                    </div>
                    <div className={style.menu}>
                        <input className={style.search_field}  type="text" onClick={console}/>
                        <Link to='/registration'>Registration</Link>
                        <Link to='/profile'>
                            <img className={style.profile_ava}  src="../../../assets/ava.png" alt="ava"/>
                        </Link>

                    </div>
                </div>
            </div>
        </header>

    )
};
export default Header;