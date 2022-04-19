import React from 'react'
import { Link } from 'react-router-dom'
import OrderButton from '../../UI/OrderButton/OrderButton'
import CartItemContainer from '../CartItem/CartItemContainer'
import RollNumber from '../../UI/RollNumber/RollNumber'

const CartSidebarNotEmpty = (props) => {

    

    return (
        <div className="cart-sidebar__not-empty">
            <div className="cart-sidebar__items">
                {Object.keys(props.items).map(el => <CartItemContainer key={props.items[el].id} counter={props.items[el].counter} {...props.items[el]} />)}
            </div>
            <div className="cart-sidebar__bottom">
                <div className="cart-sidebar__sum">
                    <span className=''>Сумма заказа: </span> {props.sum} ₴ 
                </div>
                <Link to={"/checkout"}>
                    <div className='cart-sidebar__btn'>
                        <OrderButton 
                        counter={props.counter} 
                        onClick={props.onClick}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CartSidebarNotEmpty