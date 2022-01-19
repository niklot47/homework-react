import React, {useEffect, useState} from 'react';

import {UserService as userService} from "../../services/user.service";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers(value))
    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;