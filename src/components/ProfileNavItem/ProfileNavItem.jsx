import React from 'react'
import { NavLink } from 'react-router-dom'
import 'swiper/scss';
import "./ProfileNavItem.scss"

const ProfileNavItem = (props) => {


    return (
        <NavLink className="profile-nav-item"  to={`${props.link}`}>
            {props.children}
            {props.name}
        </NavLink> 
    )
}

export default ProfileNavItem