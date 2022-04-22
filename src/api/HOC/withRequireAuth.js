    import React, { useEffect } from 'react'
    import { useSelector } from 'react-redux'
    import {Navigate} from "react-router-dom"
    import {useDispatch} from 'react-redux'
    import { getProfile, renew } from '../../redux/authReducer'

    const withRequireAuth = Component => {
        
        const RequireAuth = () => {

            const { isAuth, loading, error } = useSelector(state => state.auth)
    
            const dispatch = useDispatch()
            
            // useEffect(() => {
            //     dispatch(getProfile())
            // },[])
          
              
            console.log(isAuth, loading, error, "PROFILE CONTAINER")
            // if (loading) {
            //     console.log(loading, "LOADING")
            //     return <h1>LOADING</h1>
            // } else {
            return (
                isAuth ? 
                    <Component/> :
                    <Navigate to="/"/>
            )
            
            
           

            
        }
        return RequireAuth
    }


    
export default withRequireAuth