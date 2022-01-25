import React from 'react';

import css from "./Comment.module.css"

const Comment = ({comment}) => {
    return (
        <div className={css.comment}>
             <b>Name: {comment.name}</b>
             <div>Name: {comment.email}</div>
             <div>Name: {comment.body}</div>
        </div>
    );
};

export default Comment;