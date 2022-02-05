import React from 'react';

import img from "../../img/user.png"
import css from './User.module.css'

const User = ({user}) => {

    let {id, name, username, email, phone, website} = user;

    return (
        <div className={css.all}>
            <img className={css.img} src={img} alt="user placeholder"/>

            <div className={css.mi}>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
            </div>

            <div className={css.ai}>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
                <div>Website: {website}</div>
            </div>
        </div>
    );
};

export default User;