import {useEffect, useState} from "react"
import useGetCategories from "./useGetCategories"
import {createSelector} from "reselect";
import { useSelector } from "react-redux";

const useFiltredCategories = () => {
    
    const categories = useSelector(state => state.categories.categories)
    const [filtredCategories, setFiltredCategories] = useState(categories)  

    useEffect(()=>{
        const filter = categories.filter(el =>!el.parent)
        setFiltredCategories(filter)
    }, [categories])

    return filtredCategories ? filtredCategories : null
}

export default useFiltredCategories