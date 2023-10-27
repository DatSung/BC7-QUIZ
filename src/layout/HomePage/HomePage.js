import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './HomePage.css';
//import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomePage() {
    const nav = useNavigate();

    const HandleSubmit = () => {
        nav('/quiz');
    }

    return (
        <div className='wrapper'>
            <form>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required></input>
                </div>

                <div className='input-box'>
                    <input type='text' placeholder='Username' required></input>
                </div>

                <div className='input-box'>
                    <input type='password' placeholder='Password' required></input>
                </div>

                <div className='remember-forgot'>
                    <label>
                    <input type='checkbox' />
                    Remember
                    </label>

                    <Link to='/'>Forgot password</Link>
                </div>

                <button onClick={() => HandleSubmit()} type='submit' className='btn'>Confirm</button>

                <div className='register-link'>
                    <p>Don't have an account <Link>Register</Link></p>
                </div>
            </form>
        </div>
        )
        
}