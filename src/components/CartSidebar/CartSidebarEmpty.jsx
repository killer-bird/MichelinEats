import React from 'react'
import {ReactComponent as Cart} from "../../assets/svg/cart.svg"

const CartSidebarEmpty = () => {
    return (
    <div className="cart-sidebar__empty">
        <div className="cart-sidebar__empty__icon">
            <Cart />
        </div>
        <h5 className="cart-sidebar__empty__caption">Корзина пуста</h5>
        <p className="cart-sidebar__empty__text">Но вы в любой момент можете это исправить</p>
    </div>
    )
}

export default CartSidebarEmpty