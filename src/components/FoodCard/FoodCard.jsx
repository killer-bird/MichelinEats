import React from 'react'
import {ReactComponent as CartIcon} from "../../assets/svg/cart.svg"
import {ReactComponent as ArrowDown} from "../../assets/svg/arrow_down.svg"

import "./FoodCard.scss"
const FoodCard = React.forwardRef((props, ref) => {

    
    return (
        <div className="foodCard">
            <div className="foodCard__img">
                <img src={`https://zabqer.net/images/${props.image}.webp`} alt="food" />
            </div>
            <div className="foodCard__content">
                <div className="foodCard__info">
                    <h4 className="foodCard__title">{props.name}</h4>
                    <div className="foodCard__composition">
                        {props.composition}
                    </div>
                </div>
                <div className="foodCard__bottom">
                    <div className="foodCard__weight --red">
                        {props.weight}гр
                        <ArrowDown />
                    </div>
                    <button className="foodCard__price" onClick={props.onClick}>
                        <div className='cart-btn__icon'>
                            <CartIcon />
                            {props.counter ? <div className="cart__counter">
                                {props.counter}
                            </div> : null}
                        </div>
                        {props.price} ₴
                    </button>
                </div>
            </div>
        </div>
    )
})

export default FoodCard