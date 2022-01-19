import React from 'react';

const Post = ({post}) => {
    let {id, userId, title, body} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>UserID: {userId}</div>
            <div>Title: {title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;