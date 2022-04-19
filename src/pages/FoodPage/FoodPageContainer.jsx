import React from 'react'
import FoodPage from './FoodPage'
import SceletonFoodPage from '../../components/Sceleton/SceletonFoodPage'
import { useParams  } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadCategories, loadFoods } from '../../api/api'

const FoodPageContainer = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const foods = useSelector(state => state.foods.foods)
    const loading = useSelector(state => state.foods.loader)
    console.log(foods[id])
    return (
        <React.Fragment>
            {
                loading ? <SceletonFoodPage /> : <FoodPage food={foods[id]}/>   
            }
        </React.Fragment>
        
    )
}

export default FoodPageContainer