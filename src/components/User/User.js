import React, {useState} from 'react';
import './User.css'

const User = ({user, getUser}) => {

    const {id, name} = user;

    return (
        <div>
            <button onClick={()=>getUser(user)}>{id}) {name}</button>
        </div>
    );
};

export default User;