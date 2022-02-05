import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services";



export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            console.log(111)
            const allUsers = await userService.getAll();
            return allUsers
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',

    initialState: {
        users: [],
        status: null,
        errors: null
    },

    reducers: {},

    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = "pending"
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.error = null
            state.users = action.payload
            console.log(state.users);
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }
    }
})

const userReducer = userSlice.reducer;

export default userReducer;