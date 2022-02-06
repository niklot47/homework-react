import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services/post.service";


export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            // console.log(111111)
            const allPosts = await postService.getAll();
            return allPosts
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message)
        }
    }
)


const postSlice = createSlice({
    name: 'postSlice',

    initialState: {
        posts: [],
        status: null,
        errors: null
    },

    reducers: {},

    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = "pending"
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.error = null
            state.posts = action.payload
            console.log(state.posts);
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }
    }
})

const postReducer = postSlice.reducer;

export default postReducer;