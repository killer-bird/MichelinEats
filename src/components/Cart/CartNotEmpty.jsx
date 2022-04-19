import React from 'react'
import {ReactComponent as CartIcon} from "../../assets/svg/cart.svg"
import CartItemContainer from '../CartItem/CartItemContainer'
import OrderButton from '../../UI/OrderButton/OrderButton'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import RollNumber from '../../UI/RollNumber/RollNumber'


const CartNotEmpty = (props) => {
    
    
    const sum = useSelector(state => state.cart.sum)
    const counter = useSelector(state => state.cart.countItems)

    
    
    return (
        <div className="cart__not-empty">
            <div className='cart__icon'>
                <CartIcon />
            </div>
            <div className="cart__items">
                {Object.keys(props.items).map( (el) => <CartItemContainer {...props.items[el]}/>)}
            </div>
            <div className="cart__soom">
                <div className="cart__soom__left">
                    Сумма заказа:
                </div>
                <div className="cart__soom__right">
                    {sum} ₴
                </div>
            </div>
            <Link to={"/checkout"}>
                <div className="cart__soom">
                    <OrderButton counter={counter}/>
                </div>
            </Link>
        </div>
    )
}

export default CartNotEmpty