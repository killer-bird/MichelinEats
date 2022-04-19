import React from 'react'
import Button from '../Button/Button'
import {ReactComponent as CartIcon} from "../../assets/svg/cart.svg"
import "./OrderButton.scss"

const OrderButton = (props) => {
    return (
        <Button onClick={props.onClick}>
            <div className="order-button">
                <div className="order-button__icon">
                    <CartIcon />
                    {props.counter ? <div className="order-button__counter">
                        {props.counter}
                    </div> : null}
                </div>
                Оформить заказ
            </div>
        </Button>
    )
}

export default OrderButton