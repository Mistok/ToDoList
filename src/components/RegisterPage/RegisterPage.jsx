import React from 'react';
import style from './registerPage.scss';
import {fadeInDownBig} from "react-animations";
import styled, { keyframes } from 'styled-components';

const RegisterPage = () => {

    const FadeInDownBig= styled.div`animation: .75s ${keyframes`${fadeInDownBig}`} `;
    return(<FadeInDownBig>
            <section>
            <div className='container'>
                <form className={style.logForm} action="#">
                    <label htmlFor="email">
                        <div>Email</div>
                        <input type="email" id='email' placeholder='email@mail.com'/>
                    </label>
                    <label htmlFor="password">
                        <div>Password</div>
                        <input type="password" id='password' placeholder='****'/>
                    </label>
                    <input type="submit" value='Submit' />
                </form>
            </div>
        </section>
        </FadeInDownBig>
    )
};
export default RegisterPage;