import React, {useState} from 'react';
import {ReactComponent as Cart} from "../../assets/svg/cart.svg"
import {ReactComponent as Close} from "../../assets/svg/close_modal.svg"
import CartSidebarEmpty from "./CartSidebarEmpty"
import CartSidebarNotEmpty from './CartSidebarNotEmpty';
import { useSelector } from 'react-redux';
import CartIcon from '../../UI/CartIcon/CartIcon';
import "./CartSidebar.scss"

const CartSidebar = () => {

    const [active, setActive] = useState(false)

    const cartItems = useSelector(state => state.cart.cartItems)
    const sum = useSelector(state => state.cart.sum)
    const counter = useSelector(state => state.cart.countItems)
    
    const showSidebar = ()=>{
        setActive(!active)
        document.body.classList.toggle("--no-scroll")
    }

    return (
        <>
            <button className=" header__item cart-sidebar-btn" onClick={showSidebar}>
                    <div className='cart-btn__icon'>
                        <Cart />
                        { counter ?
                            <div className="cart__counter">
                                {counter}
                            </div> :
                            null
                        }
                    </div>
                    <span className="cart-sidebar__total">{sum} ₴</span>
            </button>

            <div className={active ? 'cart-sidebar__wrapper --active': 'cart-sidebar__wrapper'} onClick={showSidebar}>
                <aside className="cart-sidebar" onClick={(e)=> e.stopPropagation()}>
                    <div className="cart-sidebar__header">
                        <h3 className="cart-sidebar__title">Корзина</h3>
                        <button className="cart-sidebar__close" onClick={showSidebar}>
                            <Close />
                        </button>
                    </div>                    
                    <div className="cart-sidebar__content">
                        {!Object.keys(cartItems).length ? 
                        <CartSidebarEmpty /> : 
                        <CartSidebarNotEmpty items={cartItems} onClick={showSidebar} sum={sum} counter={counter} />
                        }     
                    </div>
                    
                </aside>
            </div>
        </>
    )
};

export default CartSidebar;
