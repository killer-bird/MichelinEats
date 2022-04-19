import React from 'react'
import "./ActionItem.scss"
import { Link } from "react-router-dom";

const ActionItem = (props) => {


  return (
    <Link to={`${props.id}`} className="action-item">
        <div className="action-item__img">
            <img src={`https://zabqer.net/images/${props.image}.webp`} alt={props.name} />
        </div>
        <div className="action-item__content">
            <p className="action-item__name">
                {props.name}
            </p>
        </div>
    </Link>
  )
}

export default ActionItem