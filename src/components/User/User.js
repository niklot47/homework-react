import React from 'react';

import './User.module.css'
import css from "./User.module.css";
import {Link} from "react-router-dom";

const User = ({user}) => {

    let {id, name, username} = user;

    return (
        <div className={css.user}>
            {id}) {name} ({username})
            <div className={css.bp}>
                <Link to={id+''}>User details</Link>
                <Link to={'albums/'+id+''}>User albums</Link>
            </div>
        </div>
    );
};

export default User;