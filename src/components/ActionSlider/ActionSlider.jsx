import React, {useRef} from 'react';
import {ReactComponent as ArrowLeft} from "../../assets/svg/arrow_left.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper";
import { useDispatch, useSelector } from "react-redux";
import Action from '../Action/Action';
import 'swiper/scss/navigation'
import "./ActionSlider.scss"



const ActionSlider = () => {

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const actions = useSelector(state => state.actions.actions)
    const loading = useSelector(state => state.actions.loader)

    
    return (

    <div className='actionSlider__container'>
        <div className="actionSlider-button prev" >
            <ArrowLeft />
        </div>
        <div className="actionSlider-button next" >
            <ArrowLeft />
        </div>
        <Swiper modules={[Navigation]} className="actionSlider"
            spaceBetween={10} slidesPerView={"auto"} 
            navigation={{prevEl: '.prev', 
                        nextEl: '.next'}} 
            breakpoints = {{
                1024: {
                    spaceBetween: 10
                },
                1440: {
                    spaceBetween: 29
                }
            }}
            >
            {loading ? null : 
                Object.keys(actions).map(id => <SwiperSlide key={id}><Action id={id} image={actions[id].image} /></SwiperSlide>)
            }
            
           
        </Swiper>
    </div>
    )
}

export default ActionSlider