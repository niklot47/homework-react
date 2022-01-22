import React from 'react';

import './User.module.css'

const User = ({user}) => {

    let {id, name, username} = user;

    return (
        <button>
            {id}) {name} ({username})
        </button>
    );
};

export default User;