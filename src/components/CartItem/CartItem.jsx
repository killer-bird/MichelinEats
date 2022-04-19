import React from 'react'
import {ReactComponent as CloseIcon} from "../../assets/svg/cartItem-close.svg"
import {ReactComponent as PlusIcon} from "../../assets/svg/plus.svg"
import {ReactComponent as MinusIcon} from "../../assets/svg/minus.svg"
import "./CartItem.scss"


const CartItem = (props) => {

    
    
    return (
    <div className="cart-item">
        <div className="cart-item__img">
            <img src={`https://zabqer.net/images/${props.image}.webp`} alt={props.name}/>
        </div>
        <div className="cart-item__content">
            <div className="cart-item__name">{props.name}</div>
            <div className="cart-item__weight">{props.weight} гр</div>
            <div className="cart-item__content__bottom">
                <div className="cart-item__price">{props.price} ₴</div>
                <div className="cart-item__counter">
                    <button className="cart-item__minus" onClick={props.decrement}>
                        <MinusIcon />
                    </button>
                    {props.counter}
                    <button className="cart-item__plus" onClick={props.increment}>
                        <PlusIcon />
                    </button>
                </div>
            </div>
        </div>
        <button className="cart-item__close" onClick={props.remove}>
            <CloseIcon />
        </button>
    </div>
    )
}

export default CartItem