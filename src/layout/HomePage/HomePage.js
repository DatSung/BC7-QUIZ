import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const nav = useNavigate();

    const HandleSubmit = () => {
        nav('/quiz');
    }
    return (
        <div>
            <form action="">
                <label>Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <button onClick={() => HandleSubmit()} type='submit'>Confirm</button>
            </form>
        </div>
    )
}
