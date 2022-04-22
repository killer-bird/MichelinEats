import React from 'react'
import {  useSelector } from 'react-redux'
import Slider from './Slider'


const SliderContainer = () => {
    // const {loading, categories} = useGetCategories()
    const categories = useSelector(state => state.categories.parents)
    const loading = useSelector(state => state.categories.loading)
    console.log("render SLIDER")
    return !loading ? <Slider categories={categories}/> : 
                        <div className="swiper">
                            <div className="swiper__layout"></div>
                        </div>
}

export default SliderContainer