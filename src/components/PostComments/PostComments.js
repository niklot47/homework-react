import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/comments.service";
import {useParams} from "react-router-dom";

import Comment from "../Comment/Comment";

const PostComments = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getByPostId(id).then(value => setComments(value))
    }, []);

    return (
        <div>
            Comments:

            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};


export default PostComments;