import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFoods } from "../api/api";

const useGetFoods = () => {

    const dispatch = useDispatch()
    const foods = useSelector( state => state.foods.foodsByCategory)
    const loading = useSelector( state => state.foods.loader)
    useEffect(()=>{
        if(!Object.entries(foods).length){
            dispatch(loadFoods())
        }
    },[foods])

    return { foods, loading};
}

export default useGetFoods;