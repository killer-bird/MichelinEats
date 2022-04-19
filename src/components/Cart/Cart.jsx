import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartInit } from '../../redux/refReducer'

import CartItem from "../CartItem/CartItem"
import "./Cart.scss"
import CartEmpty from './CartEmpty'
import CartNotEmpty from './CartNotEmpty'


const Cart = () => {

    const dispatch = useDispatch()
    const ref = useRef()
    const cartItems = useSelector(state => state.cart.cartItems)
    const sum = useSelector( state => state.cart.sum)
    
    
    
    useEffect(()=>{
        dispatch(cartInit(ref.current))
    },[])
    

    return (
        <div className='sticky__container'>
            <div className="cart__wrapper">
                <div className="cart" ref={ref}>
                    {!Object.entries(cartItems).length ? 
                        <CartEmpty /> :
                        <CartNotEmpty items={cartItems} sum={sum} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart