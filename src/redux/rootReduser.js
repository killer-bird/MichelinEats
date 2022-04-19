import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {  persistStore,
          persistReducer,
    } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from "./authReducer"
import categoriesReduser from "./categoriesReduser"
import cartReduser from "./cartReduser"
import foodsReducer from "./foodsReduser"
import refReducer from "./refReducer"
import actionsReducer from './actionReducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReduser,
    cart: cartReduser,
    foods: foodsReducer,
    ref: refReducer,
    actions : actionsReducer
})
  
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: null
    }),
    
})
 
export let persistor = persistStore(store)
export default store