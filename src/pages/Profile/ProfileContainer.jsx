import React, { useEffect } from 'react'
import Profile from './Profile'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../redux/authReducer"
import SceletonProfile from '../../components/Sceleton/SceletonProfile'

const ProfileContainer = () => {
    

    const dispatch = useDispatch()
    const { isAuth, loading } = useSelector(state => state.auth)
    const navigate = useNavigate()
    

    useEffect(() => {
       dispatch(getProfile())  
    },[])
    
    useEffect(() => {
        if(loading === false && !isAuth) {
             console.log(312412)
             navigate("/")   
         }   
     },[isAuth, loading])

    if( loading ) {       
        return <SceletonProfile />
    } else {
        return <Profile />
    }
        
}
  


export default ProfileContainer