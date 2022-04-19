import axios from "axios";
import { loaderCategoriesOff, loaderCategoriesOn, loaderFoodsOff, loaderFoodsOn } from "../redux/actions";

import { LOAD_CATEGORIES, 
        LOAD_FOODS, 
        LOADER_CATEGORIES_OFF, 
        LOADER_CATEGORIES_ON, 
        LOADER_FOODS_ON,
        LOADER_FOODS_OFF
    } from "../redux/types";


const api = axios.create({
    baseURL: "http://95.142.45.42/api/v1/"
})


export const loadCategories = () => {
    return async (dispatch) => {
        const categories = getState().categories.categories
        if(!categories.length) {
            dispatch(loaderCategoriesOn())
            const response  = await api.get("categories")
            dispatch({
                type: LOAD_CATEGORIES,
                data: response.data
            })
            dispatch(loaderCategoriesOff())
        }
    }
}

export const loadFoods = () => {

    return async (dispatch) => {
        dispatch(loaderFoodsOn())
        const response = await  api.get("foods")
        dispatch({
            type: LOAD_FOODS,
            data: response.data
        })
        dispatch(loaderFoodsOff())
    }
}
