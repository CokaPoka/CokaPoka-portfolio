import React, { useState} from 'react';
import shutter from '../../images/shutterstock.svg'
import insta from '../../images/instagram.svg'
import Logo from '../../images/Logo.png'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Register from '../Register/Register'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Gallery from '../Gallery/Gallery'
import { isLogin, deleteToken } from '../../service/auth.service';
import './Navigation.css'


const Navigation = () => {
    const [token, setToken] = useState()



    const handleLogout = () => {
        deleteToken();
        let token = null
        setToken(token)

    }
    

    return (
        <>
            <Router>
                <div className="navigation">
                    <div className="nav-control">
                        <div className="social-net">
                            <a href="https://www.shutterstock.com/g/CokaPoka">
                                <img class="shutterstock" src={shutter} alt="shutterstock-icon"></img>
                            </a>
                            <a href="https://www.instagram.com/_cokapoka_/">
                                <img class="instagram" src={insta} alt="instagram-icon"></img>
                            </a>
                        </div>
                        <div className="reg-log">
                            <Link to="/register" className='text-link'>Register</Link>
                            {isLogin() ? <Link to="/" className='text-link' onClick={() => { handleLogout() }} >Logout</Link> :
                                <Login token={token}></Login>
                            }
                        </div>
                    </div>
                </div>
                <div className="header">
                    <div className="logo">
                        <img className="img-logo" src={Logo} alt="logo"></img>
                    </div>
                    <div className="widget-wrap">
                        <div className="home">
                            <Link to="/" className='text-link'>HOME</Link>
                            <p>welcome</p>
                        </div>
                        {isLogin() ? <div className="about">
                            <Link to="/gallery" className='text-link' >GALLERY</Link>
                            <p>portfolio</p>
                        </div> : <div className="about">
                                <Link to="/register" className='text-link'>GALLERY</Link>
                                <p>portfolio</p>
                            </div>}
                        <div className="contact">
                            <Link to="/contact" className='text-link'>CONTACT</Link>
                            <p>stay in touch</p>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path='/register'><Register /> </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
export default Navigation