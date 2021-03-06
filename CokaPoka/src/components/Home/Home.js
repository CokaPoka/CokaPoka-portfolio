import React from 'react'
import { useHistory } from 'react-router-dom'
import { Slideshow } from '../Slider/Slider'
import Portfolio from '../../images/portfolio.jpg'
import { isLogin } from '../../service/auth.service'
import './Home.css'


const Home = () => {
    const history =useHistory();
    return (
    
            <div className="wrapper">
                <div className="slider-portfolio">
                    <Slideshow></Slideshow>
                    <div className="portfolio" style={{ backgroundImage: `url(${Portfolio})` }}>     
                    {isLogin() ? <button className="text-portfolio" onClick={() => { history.push('/gallery') }}>PORTFOLIO</button> :
                        <button className="text-portfolio" onClick={() => { history.push('/register') }}>PORTFOLIO</button>} 
                    </div>
                </div>
            </div>
    )
}

export default Home