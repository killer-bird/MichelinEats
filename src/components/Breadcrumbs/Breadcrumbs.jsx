import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./BreadCrubms.scss"


const BreadCrumbs = ({category, id}) => {
    
    const foods = useSelector(state => state.foods.foods)
    const categories = useSelector(state => state.categories.categoriesById)
    const current = categories[category]?.parent || categories[category]?.id
    console.log(current)
    return (
        <div className="bread-crumbs">
            <Link className="bread-crumbs__category" to={`/category/${current}`}>{categories[current]?.name}</Link>
            <div className="bread-crumbs__slash">/</div>
            <div className="bread-crumbs__food" >{foods[id]?.name}</div>
        </div>
    )
}

export default BreadCrumbs