import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import ProfileSlider from '../../components/ProfileNav/ProfileNav'
import ProfileLogout from '../../components/PlofileLogout/ProfileLogout'

import "./Profile.scss"

const Profile = () => {
    return (
    <div className="profile__wrapper">
        <div className="container">
            <div className="profile">
                <ProfileSlider />   
                <div className="profile__content">
                    <Outlet />
                </div>
                <div className="profile__logout">
                    <ProfileLogout />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile