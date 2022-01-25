import React from 'react';

import css from "./UserPost.module.css"

const UserPost = ({post}) => {


    return (
        <div className={css.post}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
        </div>
    );
};

export default UserPost;