import React from 'react'
import {ReactComponent as CartIcon} from "../../assets/svg/cart.svg"


const CartEmpty = () => {
    return (
    <div className="cart__empty">
        <div className='cart__icon'><CartIcon /></div>
        <h4 className="cart__empty__title">Корзина пуста</h4>
        <div className="cart__empty__text">Но вы в любой момент можете это исправить</div>
    </div>                  
    )
}

export default CartEmpty