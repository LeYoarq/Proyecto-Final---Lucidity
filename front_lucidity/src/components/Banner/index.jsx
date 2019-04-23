import React from 'react';

import './styles.css';
import BannerDinamic from './banner_header2.mp4';
import Logo from '../Assets/img/Empre_sin.png';

const Banner = () => {
    return (
        <React.Fragment>
            <section id="acc">
                <video id="acc-video" autoPlay="autoplay" muted="muted" preload="auto" loop="loop">
                    <source src={ BannerDinamic } type="video/mp4"/> 
                </video> 
                <span id="video-shadow"></span>
            </section>
            <div id="logo">
                <img src={Logo} alt="img" />
            </div> 
        </React.Fragment>
    );
}

export default Banner;






