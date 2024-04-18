import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser, FaLock, } from "react-icons/fa";
import { Link } from 'react-router-dom';


const LoginPage = () => {
   
    return (
        <div className='container'>
            <div className={`wrapper active`}>
                <div className='form-box login'>
                    <form action="">
                        <h1>Login</h1>

                        <div className='input-box'>
                            <input type='text' placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>

                        <div className='input-box'>
                            <input type='password' placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>
                        <div className='remember-forgot'>
                            <label><input type='checkbox' />
                                Remember me</label>
                            <a href='#'>Forgot password?</a>
                        </div>
                        <button type='submit'>Login</button>
                        <div className='register-link'>
                            <p>Don't have an account? <Link to={"/register"} >Register</Link></p>

                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default LoginPage
