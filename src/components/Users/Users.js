import React, {useEffect, useState} from 'react';

import {UserService as userService} from "../../services/user.service";
import User from "../User/User";

const Users = ({filteredUsers}) => {

    return (
        <div>
            {filteredUsers.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;