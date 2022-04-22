import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper";
import Category from '../Category/Category';
import 'swiper/scss';
import 'swiper/scss/navigation'
import "./Slider.scss"
import {ReactComponent as ArrowLeft} from "../../assets/svg/arrow_left.svg"


const Slider = (props) => {
        
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    
    
    return(
        <div className='swiper__container'>
            <div className="swiper__prev " ref={navigationPrevRef}>
                <ArrowLeft />
            </div>
            <div className="swiper__next" ref={navigationNextRef}>
                <ArrowLeft />
            </div>
            <Swiper modules={[Navigation]}  className="navSlider"
            
                    slidesPerView={"auto"}  
                    
                
                >  
                {props.categories.map(el => (
                <SwiperSlide key={el.id}>
                    <Category  index={el.index} id={el.id} icon={el.icon} name={el.name} image={el.image} /></SwiperSlide>))}
            </Swiper>
        </div>
        )
};

export default Slider;
