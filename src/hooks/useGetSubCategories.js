import {useEffect, useState} from "react"
import useGetCategories from "./useGetCategories";

const useGetSubCategories = (id) => {
    
    const categories = useGetCategories()
    const [subCategories, setSubCategories] = useState([])

    useEffect(()=>{
        const filter = categories.filter(el => el.parent === id)
        setSubCategories(filter)
    },[categories])
    
    return subCategories
}

export default useGetSubCategories;