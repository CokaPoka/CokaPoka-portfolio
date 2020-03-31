import React, { useState, useEffect } from 'react';
import './Register.css'
import {register} from '../../service/service'
import { useHistory } from 'react-router-dom';


const Register = ({setUser}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwConfirm, setPwConfirm] = useState('')
    const [validPw, setValidPw] = useState(false)
    const [isSame, setIsSame] = useState(false)
    const history=useHistory();

    useEffect(() => {
        //password includes minimum eight characters, at least one letter and one number:
        function isValidPw() {
            if ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)) {
                setValidPw(true)
            }
            else {
                setValidPw(false)
            }
        }
        console.log(password)
        isValidPw()
    }, [password])

    useEffect(() => {
        setIsSame(pwConfirm === password)
        console.log(pwConfirm === password)
    }, [pwConfirm, password])

     console.log(name,surname,username, password, email);
     
    const handleSubmit = () => {
            if (!validPw || !isSame)
            return
         register({ name, surname, username, password, email})
            .then((res) => {
                if (res.data.success) {
                    setUser(res.data.user)
                    history.push('/')
                }
                else console.log('Error')
            })


    }

    return (
        <>
        <div className="register-img">
            <h1 className="register-text">CREATE A NEW ACCOUNT</h1>
        </div>
        <form className="register-form">
            <div className="register-form-control">
                <input type="text" placeholder="Name" required onInput={e => {
                    setName(e.target.value)
                }} />
                <input type="text" placeholder="Surname" required onInput={e => {
                    setSurname(e.target.value)
                }} />

                <input type="text" placeholder="Username" required onInput={e => {
                    setUsername(e.target.value)
                }} />
                <input type="email" placeholder="E-mail" required onInput={e => {
                    setEmail(e.target.value)
                }} />
                <input type="password" placeholder="Password" required onInput={e => {
                    setPassword(e.target.value)
                }} />
                <input type="password" placeholder="Confirm password" required onInput={e => {
                    setPwConfirm(e.target.value)
                }} />
                <input type="submit" value="Register" onClick={e => { e.preventDefault(); handleSubmit() }} />
            </div> 
        </form>
        </>

    )
}

export default Register