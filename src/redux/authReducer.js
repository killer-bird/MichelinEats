import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

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
    async function (_, { rejectWithValue }) {
        
        try {
            const res = await axios.get("https://zabqer.net/api/v1/users/self", { withCredentials: true })
            return res
        } catch(e) {
            return rejectWithValue(e.response.data.error)
        }
        
    }
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
            const res = await axios.post("https://zabqer.net/api/v1/auth/renew",
            { withCredentials: true }
            )
            return res
        }catch (e) {
            console.log(e)
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
        logIn (state, action) {
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
        [authPhaseOne.pending]: (state, action) => {
            console.log("Auth Phase One pending")
        },
        [authPhaseOne.fulfilled]: (state, action) => {
            state.token = action.payload.data.token
            console.log(action.payload.data.token , "TOKEN!!")
        },
        [authPhaseTwo.pending]: (state, action) => {
            console.log("Auth Phase Two pending")
        },
        [authPhaseTwo.fulfilled]: (state, action) => {
            console.log(action)
        },
        [getProfile.pending]: (state, action) => {
            state.loading = true
        },
        [getProfile.fulfilled]: (state, action) => {
            console.log("fullfiled GET PROFILE")
            state.loading = false
            state.isAuth = true
        },        
        [getProfile.rejected]: (state, action) => {
            console.log("rejected")
            state.error = action.payload
            state.isAuth = false
            state.loading = false    
            console.log(state.isAuth)
        },
        [renew.fulfilled]: (state, action) => {
            console.log("RENEW")
            state.isAuth = true
        },
        [renew.rejected]: (state, action) => {
            console.log("RENEW")
            state.isAuth = false
        },
        [logout.fulfilled]: (state, action) => {
            console.log(action)
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