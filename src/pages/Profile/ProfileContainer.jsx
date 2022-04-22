import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import { useNavigate } from "react-router-dom"
import withRequireAuth from '../../api/HOC/withRequireAuth'
import { useDispatch, useSelector } from "react-redux"
// import { getProfile, renew } from "../../redux/authReducer"


const ProfileContainer = () => {
    
    // const ReqAuth = withRequireAuth(Profile)
    // const dispatch = useDispatch()
    const { isAuth, loading, error, refresh } = useSelector(state => state.auth)
    const navigate = useNavigate()
    

   
    // useEffect(() => {
    //     // getProfile()
    //     console.log("RENDER PROFILE")
    // },[])
     
    // useEffect(() => {       
    //     console.log("refresh profile")
    // },[refresh])


    if( loading ){
        console.log(loading, "loading")
        return <h1>Loading...</h1>
    } else {
        if (isAuth) {
            console.log(isAuth, "AUTH")
            return <Profile />
        }

        else {
            console.log(isAuth, "NOTAUTH")
            navigate("/")
            return null
        }
    }
  
}

export default ProfileContainer