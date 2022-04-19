import React from 'react'
import {ReactComponent as LogoutIcon} from "../../assets/svg/logout.svg"
import "./ProfileLogout.scss"

import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { logout } from "../../redux/authReducer"

const ProfileLogout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onClick = () => {
        dispatch(logout())
        navigate("/")    
    }


    return (
        <button className="profile-logout-btn" onClick={onClick}>
            <LogoutIcon />
            Выйти
        </button>
    )
}

export default ProfileLogout