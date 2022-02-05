import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Users.module.css';
import User from "../User/User";
import {getAllUsers} from "../../stor";

const Users = () => {
    const {users, status, error} = useSelector(state=>state['userReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])


    return (
        <div className={css.all}>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;