import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async function () {
        const data = await axios.get("https://zabqer.net/api/v1/categories")
        return data
    }
)


export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: {},
        categoriesById: {},
        parents: [],
        loader: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchCategories.pending]: (state, action) =>{
            state.loader = true;
        },
        [fetchCategories.fulfilled] : (state, action) => {     
            state.loader = false;
            const temp = []
            action.payload.data.forEach(cat => {
                state.categoriesById[cat.id] = cat;
                
                if(cat.parent) {
                    if(!state.categories[cat.parent]){
                        state.categories[cat.parent] = {childs : []}
                    }
                    state.categories[cat.parent].childs.push(cat)
                } else {
                    let childs = state.categories[cat.id]?.childs || []
                    state.categories[cat.id] = {...cat, childs}
                    temp.push(cat)
                }
            })
            temp.sort((prev, next) => prev.index - next.index)
            state.parents = temp           
        }
    }
})


export default categoriesSlice.reducer;
// export const categoriesReduser = (state = initialState, action) => {
//     switch (action.type) {
//         case LOAD_CATEGORIES:
//             console.log(state.categories)
//             const categories = {}
//             const categoriesById = {}
//             action.data.forEach(cat => {
//                 categoriesById[cat.id] = cat
//                 if(cat.parent) {
//                     if(!categories[cat.parent]){
//                         categories[cat.parent] = {childs : []}
//                     }
//                     categories[cat.parent].childs.push(cat)
                    
//                 } else {
//                     let childs = categories[cat.id]?.childs || []
//                     categories[cat.id] = {...cat, childs}
//                 }
//              })
            
//             console.log(categories)
        

//             return{
//                 ...state,
//                 categories,
//                 categoriesById
//             }

//         case SELECT_CATEGORY:

//             return {
//                 ...state,
//                 selectedCategory : action.payload
//             }
//         case LOADER_CATEGORIES_ON:
//             return {
//                 ...state,
//                 loader: true
//             }
//         case LOADER_CATEGORIES_OFF:
//             return {
//                 ...state,
//                 loader: false
//             }
    
//         default:
//             return state;
//     }
    
// };