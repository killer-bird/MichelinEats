import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const Category = React.forwardRef((props, ref) => {
    
    const onClick = ()=> {
        props.onClick(props.id, props.name)
    }
    const [icon, setIcon] = useState(null)

    

    return(

        <Link className="swiper__item" to={`/category/${props.id}`}>
            <div className="icon">
                <img src={`https://zabqer.net/images/${props.image}.svg`} alt={props.id} />
            </div>
            <div className="swiper__item__text">
                {props.name}
            </div>
        </Link>
        
    )
})

export default Category;
