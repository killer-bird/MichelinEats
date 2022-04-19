import React from 'react'
import FoodPageItem from './FoodPageItem'
import { cartAdd, updateSum, updateCount } from '../../redux/cartReduser'
import { useDispatch } from 'react-redux'



const FoodPageItemContainer = ({food}) => {


  const dispatch = useDispatch()

  console.log(food)
  const addToCard = () => {   
    dispatch(cartAdd(food))
    dispatch(updateSum())
    dispatch(updateCount())
  }
    
  return (
    <FoodPageItem onClick={addToCard} {...food}/>
  )
}

export default FoodPageItemContainer