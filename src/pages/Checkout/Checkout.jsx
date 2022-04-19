import React from 'react'
import CheckoutForm from './CheckoutForm'
import { useDispatch, useSelector } from 'react-redux'
import "./Checkout.scss"
import { authStageOne } from '../../redux/actions'
import CheckoutCart from '../../components/CheckoutCart/CheckoutCart'

const Checkout = () => {

    const dispatch = useDispatch()

    const onClick = () => dispatch(authStageOne())
    const cartItems = useSelector( state => state.cart.cartItems )

    const onSubmit = async (data)=>{
        let items = []
        Object.keys(cartItems).forEach( key => { 
            items.push({
                id: cartItems[key].id,
                count: cartItems[key].counter
            })
        })

        console.log({items, data})
    }

    return (

    <div className="checkout__wrapper">
        <div className="container">
            <div className="checkout">
                <div className="checkout__left">
                    <h2 className="title">
                        Оформление заказа
                    </h2>
                    {/* <p className="checkout__auth">
                        Для накапливания бонусов вы можете 
                        <button className="checkout__auth-btn" onClick={onClick}>
                            Авторизироваться
                        </button>
                    </p> */}
                    <CheckoutForm submit={onSubmit} />
                </div>
                <CheckoutCart cartItems={cartItems} />
            </div>
        </div>
    </div>
    )
}

export default Checkout