import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        ref: null,
        cartItems: {},
        sum: 0,
        countItems: 0
    },
    reducers : {
        
        cartAdd( state, action ){
            if (state.cartItems[action.payload.id]){
                state.cartItems[action.payload.id].counter+=1 
            } else {     
                state.cartItems[action.payload.id] = {...action.payload, counter: 1}
            }
        },
        cartRemove( state, action ){
            console.log(state)
            delete state.cartItems[action.payload.id]     
        },
        cartIncrement( state, action ){
            state.cartItems[action.payload.id].counter += 1
        },
        cartDecrement( state, action ){
            state.cartItems[action.payload.id].counter -= 1
            if( state.cartItems[action.payload.id].counter < 1 ){
                delete state.cartItems[action.payload.id]
            }   
        },
        updateSum( state, action ) {
            let sum = 0
            if(Object.keys(state.cartItems).length === 0)
                sum = 0
            for ( let i in state.cartItems) {
                sum+= state.cartItems[i].counter * state.cartItems[i].price
                
            }
            state.sum = sum
        },
        updateCount ( state, action ) {
            let count = 0
            if(Object.keys(state.cartItems).length === 0)
                count = 0
            for(let i in current(state.cartItems)) {
               
                count+= state.cartItems[i].counter * 1    
            }
            state.countItems = count
        }
    }
})

export const { cartAdd, cartIncrement, cartDecrement, cartRemove, updateSum, updateCount } = cartSlice.actions
export default cartSlice.reducer;