import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Comment from "../Comment/Comment";
import css from './Comments.module.css'
import {getAllComments} from "../../stor/comment.slice";

const PostComments = () => {

    const {comments, status, error} = useSelector(state=>state['commentReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('getting comments');
        dispatch(getAllComments())
    }, [])

    return (
        <div className={css.all}>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};


export default PostComments;