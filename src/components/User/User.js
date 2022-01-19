import React from 'react';

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div>
            {id}) {name}
        </div>
    );
};

export default User;