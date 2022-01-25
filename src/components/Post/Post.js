import React from 'react';
import {Link} from "react-router-dom";

import css from "./Post.module.css"

const Post = ({post}) => {

    return (
        <div className={css.post}>
            {post.id}) {post.title}
            <Link to={post.id+''}>Details</Link>
        </div>
    );
};

export default Post;