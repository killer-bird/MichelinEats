import { useEffect, useState } from "react";
import useGetFoods from "./useGetFood";



const useGetFilteredFoods = (id) => {

    const foods = useGetFoods()
    const [filteredFoods, setFilteredFoods] = useState(foods)

    useEffect(() =>{
        const filter = foods.filter(el => el.category === id)
        setFilteredFoods(filter)
    }, [])

    return filteredFoods
}

export default useGetFilteredFoods;