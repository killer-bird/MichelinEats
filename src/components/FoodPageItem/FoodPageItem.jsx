import React from 'react'
import { useSelector } from "react-redux"
import {ReactComponent as CartIcon} from "../../assets/svg/cart.svg"
import {ReactComponent as ArrowDown} from "../../assets/svg/arrow_down.svg"
import "./FoodPageItem.scss"



const FoodPageItem = ({composition, image, name, price, weight,id, onClick,  }) => {

    console.log(image)
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log(cartItems)
    
    return (
        <div className="food-page-item">
            <div className="food-page-item__img">
                <img src={`https://zabqer.net/images/${image}.webp`} alt="" />
            </div>
            <div className="food-page-item__right">
                <h2 className="food-page-item__title">
                    {name}
                </h2>
                <p className="food-page-item__composition">
                    {composition}
                </p>
                <div className="food-page-item__bottom">
                    <div className="food-page-item__weight --red">
                            {weight}гр
                            <ArrowDown />
                        </div>
                        <button className="food-page-item__price" onClick={onClick}>
                            <div className='food-page-item__icon'>
                                <CartIcon />
                                
                                {cartItems[id]?.counter ? <div className="cart__counter">
                                    {cartItems[id]?.counter}
                                </div> : null}
                            </div>
                            {price} ₴
                        </button>
                </div>
            </div>
        </div>
    )
}

export default FoodPageItem