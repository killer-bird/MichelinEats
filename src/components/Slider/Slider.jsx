import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from '../../api/api';
import { createSelector } from 'reselect';
import Category from '../Category/Category';

import useGetCategories from '../../hooks/useGetCategories';
import 'swiper/scss';
import 'swiper/scss/navigation'
import "./Slider.scss"
import useFiltredCategories from '../../hooks/useFiltredCategories';
import { filterCategories } from '../../redux/actions';
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
