import React from 'react'
import { Link } from "react-router-dom";
import actionImg from "../../assets/img/action.png"
import "./Action.scss"

const Action = (props) => {
  
  return (
    <Link className='action' to={`actions/${props.id}`}>
      
        <img src={`https://zabqer.net/images/${props.image}.webp`} alt="" className="action__img" />
      
    </Link>
    
  )
}

export default Action