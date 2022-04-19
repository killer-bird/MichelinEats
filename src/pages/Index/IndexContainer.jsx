import React,{useEffect} from 'react'
import Index from './Index'
import { useDispatch } from 'react-redux'
import { loadCategories, loadFoods } from '../../api/api'
import useData from "../../hooks/useData"
import useGetCategories from '../../hooks/useGetCategories'

const IndexContainer = () => {
    // useGetCategories()
    const dispatch = useDispatch()
    // useData()
    // useEffect(()=>{
    //    console.log("RENDER")
    // },[])
   

    

    return (
        <Index />
    )
}

export default IndexContainer