import React,{ useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadCategories } from '../api/api';


const useGetCategories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.categories)
    const loading = useSelector(state => state.categories.loader)

    useEffect(()=>{
        if(!Object.entries(categories).length){
            dispatch(loadCategories())
            console.log("in API", categories)
        }else{
            console.log("in memory")
        }      
    },[categories])

    return {categories, loading}
}

export default useGetCategories;