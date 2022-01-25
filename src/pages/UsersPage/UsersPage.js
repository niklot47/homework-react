import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import {Outlet, Route, Routes} from "react-router-dom";

import css from './UsersPage.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className={css.all}>
            <div className={css.left}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div className={css.right}>
                <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;