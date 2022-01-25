import React, {useEffect, useState} from 'react';

import {Link, Outlet, useParams} from 'react-router-dom'
import {userService} from '../../services/user.service'
import css from "./UserDetails.module.css"

const UserDetails = () => {

    const {id} = useParams();

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getById(id).then(value => setUserDetails({...value}))
    }, [id]);

    return (
        <div>
            {
                userDetails && (
                    <div>

                    <div className={css.ud}>
                        <div>
                            <div>Id: {id}</div>
                            <div>Username: {userDetails.username}</div>
                            <hr/>
                            <div>
                                <div>User: {userDetails.name}</div>
                                <div>Mail: {userDetails.email}</div>
                                <div>Phone: {userDetails.phone}</div>
                                <div>Website: {userDetails.website}</div>
                            </div>
                            <hr/>
                            <div>Address: {userDetails.address.city}, {userDetails.address.suite}, {userDetails.address.street}, {userDetails.address.zipcode}</div>
                            <hr/>
                            <div>Company: {userDetails.company.name}, {userDetails.company.cathPhrase}, {userDetails.company.bs}</div>
                        </div>

                        <div>
                            <Link to={'posts'}>User posts</Link>
                        </div>
                    </div >
                        <div className={css.posts}>
                            <Outlet/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UserDetails;