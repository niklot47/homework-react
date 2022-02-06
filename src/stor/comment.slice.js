import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../services/comment.service";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            // console.log(111111)
            const allComments = await commentsService.getAll();
            return allComments
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message)
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',

    initialState: {
        comments: [],
        status: null,
        errors: null
    },

    reducers: {},

    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = "pending"
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.error = null
            state.comments = action.payload
            console.log(state.comments);
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }
    }
})

const commentReducer = commentSlice.reducer;

export default commentReducer;