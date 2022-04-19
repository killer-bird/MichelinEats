    import React, { useEffect } from 'react'
    import { useSelector } from 'react-redux'
    import {Navigate} from "react-router-dom"
    import {useDispatch} from 'react-redux'
    import { getProfile, renew } from '../../redux/authReducer'

    const withRequireAuth = Component => {
        
        const RequireAuth = () => {

            const { isAuth, loading } = useSelector(state => state.auth)
    
            const dispatch = useDispatch()
            
          
              
            
            return (
                isAuth ? 
                    <Component/> :
                    <Navigate to="/"/>
            )
           

            
        }
        return RequireAuth
    }


    
export default withRequireAuth