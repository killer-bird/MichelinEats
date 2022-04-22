import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile, renew } from "../redux/authReducer"


const useAuth = (func, error, refresh) => {

    const dispatch = useDispatch
    
    if (refresh) {
        return () => {
            dispatch(renew())
        }
    }
    if (error) {
        return () => {
            dispatch(renew())
        }
    }
    return () => {
        dispatch(func())
    }
    // const { error, refresh} = useSelector( state => state.auth)
    // if(error) {
    //     return dispatch(renew())
    // } 
    // useEffect(() =>{
    //     dispatch(func())
    // },[])

    // useEffect(()=> {
    //     if(error) {
    //       console.log(error, "ERROR")
    //       dispatch(renew())
    //     }
    //   }, [error]);
  
    //   useEffect(()=>{
    //     if(refresh) {
    //       dispatch(func())
    //     }
    //   }, [refresh]);
}


export default useAuth