
import React from 'react';
import style from './header.scss';

const Header = () => {
    return(<header>
            <div className='container'>
                <div className={style.header_container}>
                    <div className={style.logo_container}>
                        <img className={style.logo} src="../../../assets/logo.png" alt="Logo"/>
                    </div>
                    <div className={style.menu}>
                        <input className={style.search_field}  type="text" onClick={console}/>
                        <img className={style.profile_ava}  src="../../../assets/ava.png" alt="ava"/>
                    </div>
                </div>
            </div>
        </header>

    )
};
export default Header;