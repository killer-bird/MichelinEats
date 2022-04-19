import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchActions = createAsyncThunk(
    "actions/fetchActions",
    async function () {
        const data = await axios.get("https://zabqer.net/api/v1/posts")
        return data
    }
)
const actionsSlice = createSlice({
    name: 'actions',
    initialState: {
        actions : {},
        loader: false
    },
    reducers : {},
    extraReducers: {
        [fetchActions.pending] : (state, action) => {
            state.loader = true;
        },
        [fetchActions.fulfilled] : (state, action) => {
            state.loader = false;
            const temp = []
            action.payload.data.forEach(action => {
                temp[action.id] = action
            })
            temp.filter(el => el.published)
            state.actions = temp
        }
    },
})

export default actionsSlice.reducer