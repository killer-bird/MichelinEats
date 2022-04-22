import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { apiAuth } from "../utils/authHandler"



axios.defaults.withCredentials  = true;

const TOKEN_EXPIRE_OR_INVALID = "ERR_TOKEN_EXPIRE_OR_INVALID"


export const authPhaseOne = createAsyncThunk(
    "auth/authPhaseOne",
    async function (data) {
       const res =  await axios.post("https://zabqer.net/api/v1/auth/customer", {
           phone: data
       })
       console.log(res)
       return res
    }
)

export const authPhaseTwo = createAsyncThunk(
    "auth/authPhaseTwo",
    async function (payload) {   
        console.log("send data", payload) 
        const res = await axios.post("https://zabqer.net/api/v1/auth/customer/verify", 
            payload,
            {
                withCredentials: true
            }
        )        
        return res
    }
)

export const getProfile = createAsyncThunk(
    "auth/isAuth",
    async function (_, { rejectWithValue}) { 
        try {
            const res = await apiAuth.get('users/self')
            return res 
        }  catch (e) {
            console.log("REDUSER ERROR")
            return rejectWithValue(e.response.data.error)
        }
            
    }
    // async function (_, { rejectWithValue }) {      
    //     try {
    //         const res = await axios.get("https://zabqer.net/api/v1/users/self", { withCredentials: true })
    //         return res
    //     } catch(e) {
    //         return rejectWithValue(e.response.data.error)
    //     }       
    // }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async function () {
        const res = await axios.post("https://zabqer.net/api/v1/auth/logout",
            {withCredentials: true}
        )
        return res
    }
)

export const renew = createAsyncThunk(
    "auth/renew",
    async function (_, { rejectWithValue }) {
        try {
            const res = await axios.post("https://zabqer.net/api/v1/auth/renew", { withCredentials: true })
            return res
        } catch (e) {
            return rejectWithValue(e)
        }    
    }
)

const authSlice = createSlice(
    {
    name: 'auth',
    initialState: {
        authStage: 0,
        phoneNumber: 0,
        isAuth: false,
        phoneToken: null,
        loading: false,
        error: null,
        refresh: null,
        profile: null
    },
    reducers: {
        authStageOne (state, action) {
            state.authStage = 1     
        },
        authStageTwo (state, action) {
            state.authStage = 2
        },
        closeAuth (state, action) {
            state.authStage = 0
        },
        setAuth (state, action) {
            state.isAuth = true
        },
        fetchProfile (state, action) {
            console.log(action)
        },
        
        logOut (state, action) {
            state.isAuth = false
        },
        setPhone (state, action) {
            state.phoneNumber = action.payload
        },
        setToken (state, action) {
            state.token = action.payload
        },
        
    },
    extraReducers: {
        [authPhaseOne.fulfilled]: (state, action) => {
            state.token = action.payload.data.token
            console.log(action.payload.data.token , "TOKEN!!")
        },
        [getProfile.pending]: (state, action) => {
            state.loading = true
        },
        [getProfile.fulfilled]: (state, action) => {
            console.log(action.payload.data)
            state.loading = false
            state.isAuth = true
            state.profile = {}
            state.profile["phone"] = action.payload.data.phone
            state.profile["email"] = action.payload.data.email
            state.profile["firstname"] = action.payload.data.firstname
            state.profile["gender"] = action.payload.data.gender
        },        
        [getProfile.rejected]: (state, action) => {
            state.error = action.payload
            state.isAuth = false
            state.loading = false    
        },

        [renew.fulfilled]: (state, action) => {
            state.refresh = true
        },
        [renew.rejected]: (state, action) => {
            state.refresh = false
        },
        [logout.fulfilled]: (state, action) => {
            
            state.isAuth = false
        }   
    }
}
)

export const {  authStageOne, 
                authStageTwo, 
                closeAuth, 
                logIn, 
                logOut, 
                setPhone,
                setToken,
                setAuth,
                fetchProfile 
            } = authSlice.actions

export default authSlice.reducer