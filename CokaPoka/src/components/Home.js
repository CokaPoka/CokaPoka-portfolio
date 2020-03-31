import React from 'react'
import { Slideshow } from './Slider'
import Portfolio from '../images/portfolio.jpg'
import { useHistory } from 'react-router-dom'


const Home = () => {
    const history =useHistory();
    return (
    
            <div className="wrapper">
                <div className="slider-portfolio">
                    <Slideshow></Slideshow>
                    <div className="portfolio" style={{ backgroundImage: `url(${Portfolio})` }}>     
                      <button className="text-portfolio" onClick={()=>{history.push('/buyimages')}}>PORTFOLIO</button>
                    </div>
                </div>
            </div>
    )
}

export default Home