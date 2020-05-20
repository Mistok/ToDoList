import React from 'react';
import style from './registerPage.scss';

const RegisterPage = () => {
    return(<section>
            <div className='container'>
                <form className={style.logForm} action="#">
                    <label htmlFor="email">
                        <div>Email</div>
                        <input type="email" id='email' placeholder='Login'/>
                    </label>
                    <label htmlFor="password">
                        <div>Password</div>
                        <input type="password" id='password' placeholder='password'/>
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </section>

    )
};
export default RegisterPage;