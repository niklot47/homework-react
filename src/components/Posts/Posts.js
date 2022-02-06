import React, {useEffect}  from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Posts.module.css'
import Post from "../Post/Post";
import {getAllPosts} from "../../stor/post.slice";

const Posts = () => {
    const {posts, status, error} = useSelector(state=>state['postReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('getting posts');
        dispatch(getAllPosts())
    }, [])


    return (
        <div className={css.all}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;