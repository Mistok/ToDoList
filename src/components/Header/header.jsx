
import React from 'react';
import {S} from './header.scss';
console.log(S);
class Header extends React.Component {


    render(){
        return(<header>
                <div className='container'>
                    <div className='header_container'>
                        <div className='logo_container'>
                            <img className='logo' src="../../../assets/logo.png" alt="Logo"/>
                        </div>
                        <div className='menu'>
                            <input className='search_field'  type="text" />
                            <img className='profile_ava'  src="../../../assets/ava.png" alt="ava"/>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}
export default Header;