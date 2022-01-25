import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

import css from "./PostDetails.module.css"

const PostDetails = () => {


    const {id} = useParams();

    const [postsDetails, setPostsDetails] = useState([]);

    useEffect(()=>{
        postService.getById(id).then(value => setPostsDetails(value))
    },[id])

    return (
        <div>
            <div className={css.pd}>
                <b>{postsDetails.title}</b>
                <div>{postsDetails.body}</div>
                <div>
                    <Link to={'comments'}>Read comments</Link>
                </div>
            </div>
            <div className={css.comments}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDetails;