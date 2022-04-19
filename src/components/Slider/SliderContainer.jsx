import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import { filterCategories } from '../../redux/actions'
import useGetCategories from '../../hooks/useGetCategories'


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