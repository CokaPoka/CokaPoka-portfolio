import React, { useState } from 'react';
import './Login.css'
import {login} from '../../service/service'
import { useHistory } from 'react-router-dom';
import { setToken } from '../../service/auth.service';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history=useHistory()

    function handleSubmit() {
        login({ username, password })
            .then(data => {
                if (data.success) {
                    setToken(data.token)
                    history.push('/')
                }
                else console.log('Not logged in.')
            })


    }

    return (
        <form className="login-form">
            <input type="text" placeholder="Username" className="login-input username" required onInput={e => {
                setUsername(e.target.value)
            }} />
            <input type="password" placeholder="Password" className="login-input password" required onInput={e => {
                setPassword(e.target.value)
            }} />
            <input type="submit" value="Login" className="btn-login" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </form>
    )
}

export default Login