import React from 'react'
import BreadCrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Cart from '../../components/Cart/Cart'
import FoodPageItemContainer from "../../components/FoodPageItem/FoodPageItemContainer"
import "./FoodPage.scss"



const FoodPage = ({food}) => {

    
    return (
        <div className="food-page__wrapper">
            <div className="container">
                <div className="food-page">
                    <BreadCrumbs id={food?.id} category={food?.category} />
                    <div className="food-page__main">
                        <FoodPageItemContainer food={food}/>
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodPage