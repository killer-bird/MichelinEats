    import React, { useEffect } from 'react'
    import { useSelector } from 'react-redux'
    import { useLocation } from "react-router"
    import { Navigate } from "react-router-dom"
    import {useDispatch} from 'react-redux'
    import { getProfile, renew } from '../../redux/authReducer'

    const withRequireAuth = Component => {
        
        const RequireAuth = () => {

            const { isAuth, loading } = useSelector(state => state.auth)
            const location = useLocation()
            const dispatch = useDispatch()
              
            
            if (loading) {
                console.log(loading, "LOADING")
                return <h1>LOADING</h1>
            } 
            return (
                isAuth ? 
                    <Component/> :         
                    <Navigate to="/" replace state={{ from: location }}/>
                    
            )
            
            
           

            
        }
        return RequireAuth
    }


    
export default withRequireAuth