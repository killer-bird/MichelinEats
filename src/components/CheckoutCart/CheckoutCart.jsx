import React from 'react'
import CartItemContainer from "../CartItem/CartItemContainer"
import { useSelector } from 'react-redux'
import "./CheckoutCart.scss"

const CheckoutCart = (props) => {

  
  const sum = useSelector( state => state.cart.sum)

  return (
    <div className='sticky__container'>
      <div className='checkout-cart__wrapper'>
        <div className="checkout-cart">
          <h3 className="checkout__title">Итоговая стоймость</h3>
          <div className="checkout-cart__items">
            {Object.keys(props.cartItems).map( (el) => <CartItemContainer key={el} {...props.cartItems[el]} />)}
          </div>
          <div className="cart__soom">
              <div className="cart__soom__left">
                  Сумма заказа:
              </div>
              <div className="cart__soom__right">
                  {sum} ₴
              </div>
          </div>
          <div className="checkout-cart__final-sum">
              <div className="checkout-cart__final-sum__left">
                Итоговая сумма
              </div>
              <div className="checkout-cart__final-sum__right">
                {sum} ₴
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCart