import { 
        AUTH_STAGE_1,
        AUTH_STAGE_2, 
        CLOSE_AUTH, 
        SET_PHONE,
        LOG_IN,
        LOG_OUT, 
        FILTER_CATEGORIES,
        LOADER_CATEGORIES_OFF, 
        LOADER_CATEGORIES_ON,
        LOADER_FOODS_OFF,
        LOADER_FOODS_ON,
        SELECT_CATEGORY,
        CART_ADD,
        CART_REMOVE,
        CART_INIT,
        CART_DECREMENT,
        CART_INCREMENT,
        UPDATE_SUM,
        COUNT_ITEMS
    } from "./types";



//Авторизация
export const authStageOne = () => ({type : AUTH_STAGE_1})
export const authStageTwo = () => ({type: AUTH_STAGE_2})
export const authClose = () => ({type: CLOSE_AUTH})
export const setPhone = phone => ({type: SET_PHONE, payload: phone})
export const logIn = ()=>({ type: LOG_IN})
export const logOut = () => ({ type: LOG_OUT})



//Категории
export const filterCategories = () => ({type: FILTER_CATEGORIES})
export const selectCategory = id => ({type: SELECT_CATEGORY, payload: {id}})
export const loaderCategoriesOn = () => ({type: LOADER_CATEGORIES_ON})
export const loaderCategoriesOff = () => ({type: LOADER_CATEGORIES_OFF})


//Блюда
export const loaderFoodsOn = () => ({ type: LOADER_FOODS_ON})
export const loaderFoodsOff = () => ({ type: LOADER_FOODS_OFF})


//Корзина
export const cartInit = ref => ({ type: CART_INIT, payload: ref})
export const cartAdd = card => ({ type: CART_ADD, payload: card })
export const cartRemove = card => ({ type: CART_REMOVE, payload: card })
export const cartIncrement = card => ({ type: CART_INCREMENT, payload: card })
export const cartDecrement = card => ({ type: CART_DECREMENT, payload: card })
export const updateSum = () => ({type: UPDATE_SUM})
export const countItems = () => ({type: COUNT_ITEMS})