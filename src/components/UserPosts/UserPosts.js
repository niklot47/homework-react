import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useParams} from "react-router-dom";
import UserPost from "../UserPost/UserPost";

const UserPosts = () => {

    const {id} = useParams();

    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=>{
        postService.getByUserId(id).then(value => setUserPosts(value))
    },[])

    return (
        <div>
            {
                userPosts.map(post => <UserPost key={post.id} post={post}/>)
            }
        </div>
    );
};

export default UserPosts;