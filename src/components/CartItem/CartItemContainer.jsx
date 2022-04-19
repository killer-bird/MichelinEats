import React from 'react'
import CartItem from './CartItem'
import { useDispatch } from 'react-redux'
import { updateSum, cartIncrement, updateCount, cartDecrement, cartRemove } from '../../redux/cartReduser'


const CartItemContainer = (props) => {
    
    const dispatch = useDispatch()
    
    const updateState = () => {
        dispatch(updateCount())
        dispatch(updateSum())
    }


    const increment = () => {
        dispatch(cartIncrement(props))
        updateState()
    }
    const decrement = () => {
        dispatch(cartDecrement(props))
        updateState()
    }
    const remove = () => {
        dispatch(cartRemove(props))
        updateState()
        console.log("REMOVEd")
    }
    
    return <CartItem {...props} remove={remove} decrement={decrement} increment={increment}/>
}

export default CartItemContainer