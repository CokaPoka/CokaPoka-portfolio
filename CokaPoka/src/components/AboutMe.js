import React from 'react';
import ProfileImg from '../images/profile.jpg'
import about from '../images/about.png'

const About = () => {
    return (
        <div className="about-me">
            <img class="profile-img" src={ProfileImg} alt="profile-img"></img>
            <div className="container-about">
                <img class="about-img" src={about} alt="about"></img>
                <p className="about-me-text">CokaPoka photography is ...</p>
            </div>
        </div>
    )
}

export default About