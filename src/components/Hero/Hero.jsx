import React from 'react';
import "./Hero.scss"
import SliderContainer from "../Slider/SliderContainer"


const Hero = () => {
    return (
        <>
            <div className='hero__wrapper'>  
                <div className="hero">
                    <h1 className='title hero__title'>«Michelin Eats» – радость есть</h1>
                    <SliderContainer />          
                </div>
            </div>
        </>
    )
};

export default Hero;
