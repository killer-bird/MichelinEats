// import { LOAD_FOODS, LOADER_FOODS_ON, LOADER_FOODS_OFF } from "./types";

// const initialState = {
//     foods: {},
//     foodsByCategory: {},
//     loader: false
// }
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchFoods = createAsyncThunk(
    "foods/fetchFoods",
    async function () {
        const data = await axios.get("https://zabqer.net/api/v1/foods")
        return data
    }
)

const foodsSlice = createSlice({
    name: "foods",
    initialState: {
        foods: {},
        foodsByCategory: {},
        loader: false
    },
    reducers: {},
    extraReducers: {
        [fetchFoods.pending] : (state, action) => {
            state.loader = true
        },
        [fetchFoods.fulfilled] : (state, action) => {
            state.loader = false
            action.payload.data.forEach( food => {
                state.foodsByCategory[food.category] ?
                state.foodsByCategory[food.category].push(food) :
                state.foodsByCategory[food.category] = [food]
                state.foods[food.id] = food
            })
            
        }
    }
})

export default foodsSlice.reducer
// export const foodsReduser = ( state=initialState, action) => {

//     switch (action.type) {
//         case LOAD_FOODS:
//             const foods = {}
//             const foodsByCategory = {}
//             action.data.forEach( el => {
//                 foodsByCategory[el.category] ?
//                 foodsByCategory[el.category].push(el) :
//                 foodsByCategory[el.category] = [el]
//                 foods[el.id] = el
//             })
        
//             // const foods = action.data.map(el => {
//             //     return {
//             //         id: el.id,
//             //         index: el.index,
//             //         name: el.name,
//             //         category: el.category,
//             //         weight: el.weight,
//             //         price: el.price,
//             //         composition: el.composition,
//             //         image: el.image
//             //     }
//             // })
            
//             return {
//                 ...state,
//                 foods,
//                 foodsByCategory
//             }
//         case LOADER_FOODS_ON:
//             console.log("loading");
//             return {
//                 ...state,
//                 loader: true
//             }
//         case LOADER_FOODS_OFF:
//             console.log("stop");
//             return {
//                 ...state,
//                 loader: false
//             }
//         default:
//             return state;
//     }
// }