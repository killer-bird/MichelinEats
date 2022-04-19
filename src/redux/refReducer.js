import {createSlice} from "@reduxjs/toolkit"



const refReducer = createSlice({
    name: 'ref',
    initialState: {
        cart: null
    },
    reducers : {
        cartInit( state, action ){
            state.cart = action.payload
        },
    }
})

export const { cartInit } = refReducer.actions
export default refReducer.reducer