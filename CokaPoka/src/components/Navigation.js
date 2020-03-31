import React from 'react';
import shutter from '../images/shutterstock.svg'
import insta from '../images/instagram.svg'
import Logo from '../images/Logo.png'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Register from './Register/Register'
import Login from './Login/Login'
import Home from './Home'
import BuyImages from './BuyImages'
import { isLogin } from '../service/auth.service';


const Navigation = ({ setUser})=>{
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
                    <Login></Login>
                    {/* {isLogin() ? <Link to="/logout">Logout</Link> : <Login></Login>} */}
                    {/* <Link to="/login" className='text-link'>Login</Link> */}
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
                <div className="about">
                    <Link to="/buyimages" className='text-link'>BUY IMAGES</Link>
                    <p>portfolio</p>
                </div>
                <div className="contact">
                    <Link to="/contact" className='text-link'>CONTACT</Link>
                    <p>stay in touch</p>
                </div>
            </div>
        </div>
                <Switch>
                    <Route path='/register' component={(props) => <Register setUser={setUser} {...props} />} />
                    <Route path='/login' component={(props) => <Login setUser={setUser} {...props} />} />
                    <Route path="/buyimages">
                        <BuyImages />
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