import React from 'react';

import css from './Layout.module.css'
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to='/cars'>Cars</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/comments'>Comments</NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;