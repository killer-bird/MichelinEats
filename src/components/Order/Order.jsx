import React from 'react'
import "./Order.scss"


const Order = (props) => {
  return (
    <div className="order">
        <div className="order__header">
            <h3 className="order__title">№38394839</h3>
            <button className="order__btn">Подробнее</button>
        </div>
        <div className="order__content">
            <div className="order__content__item">
                <div className="order__content__key">Сумма заказа:</div>
                <div className="order__content__value">330 ₴ </div>
            </div>
            <div className="order__content__item">
                <div className="order__content__key">Дата заказа:</div>
                <div className="order__content__value">21.02.2022 12:54:00</div>
            </div>
            <div className="order__content__item">
                <div className="order__content__key">Дата доставки:</div>
                <div className="order__content__value">21.02.2022 19:24:30</div>
            </div>
            <div className="order__content__item">
                <div className="order__content__key">Способ оплаты:</div>
                <div className="order__content__value">Онлайн</div>
            </div>
        </div>
    </div>
  )
}

export default Order