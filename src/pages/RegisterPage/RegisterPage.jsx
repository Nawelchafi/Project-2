import './RegisterPage.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const API_URL = 'https://restaurant-beckend.adaptable.app'

const RegisterPage = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState({})

    const [user, setUser] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const createUser = (formData) => {
        axios
            .post(`${API_URL}/register`, formData)
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit = { handleSubmit }

        const formData = { user, email, password }

        createUser(formData)
        navigate('/register')
    }


return (
    <div className='container'>
        <div className={`wrapper active`}>
            <div className='form-box register'>
                <form action="">
                    <h1>Registration</h1>

                    <div className='input-box register'>
                        <input name="name" value={user} onChange={(e) => setUser(e.target.value)} type="text" id="name" placeholder='Username' /> 
                        <FaUser className='icon' />
                    </div>

                    <div className='input-box register'>
                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" placeholder='Email' /> 
                        <MdEmail className='icon' />
                    </div>

                    <div className='input-box register'>
                        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="password" placeholder='Password' /> 
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label><input className='checkbox' type='checkbox' />
                            I agree to the terms & conditions</label>
                    </div>
                    <button type='submit'>Register</button>
                    <div className='register-link'>
                        <p>Already have an account? <Link to={"/login"} >Login</Link></p>

                    </div>
                </form>

            </div>
        </div>
    </div>
)
}

export default RegisterPage


// type='text'  required />
// type='email' placeholder='Email' required />
// type="text" id="name" type='password' placeholder='Password' required />
// /                     <label className='addBeerLabel' htmlFor="name">Name</label>
//                     <input className='addAllBeerInput' name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" />