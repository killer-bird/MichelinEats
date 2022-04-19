import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories, loadFoods } from "../api/api";

const useData = () => {

    const categories = useSelector(state => state.categories.categories)
    const foods = useSelector(state => state.foods.foods)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadFoods())
        dispatch(loadCategories())
    },[])
}

export default useData