import React, {useState} from 'react';
import './User.css'

const User = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            {id}) {name} - {username} - {email}
        </div>
    );
};

export default User;