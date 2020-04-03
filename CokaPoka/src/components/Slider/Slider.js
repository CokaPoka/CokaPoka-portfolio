import React from 'react';
import { Slide } from 'react-slideshow-image';
import Img1 from '../../images/1.jpg';
import Img2 from '../../images/4.jpg';
import Img3 from '../../images/9.jpg';
import Img4 from '../../images/10.jpg';
import Img5 from '../../images/11.jpg';
import Img6 from '../../images/12.jpg';
import Img7 from '../../images/13.jpg';
import './Slider.css'



// const slideImages = [

//     { Img1 }, { Img2 }, { Img3 }, { Img4 }, { Img5 }, { Img6 }, { Img7 }

// ];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Img1} alt="img1"></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Img2} alt="img1"></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Img3} alt="img1"></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Img4} alt="img1"></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Img5} alt="img1"></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Img6} alt="img1"></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Img7} alt="img1"></img>
                    </div>
                </div>
            </Slide>
        </div>
    )
}