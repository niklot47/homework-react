import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services/user.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await userService.getAll();
            return users
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',

    initialState:{
        users: [],
        status: null,
        errors: null
    },

    reducers:{

    },

    extraReducers: {

    }
})

const userReducer = userSlice.reducer;

export default userReducer;