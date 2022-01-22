import React from "react";

import css from './App.module.css'
import {NavLink, Routes, Route} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import NotFountPage from "./pages/NotFoundPage/NotFountPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'*'} element={<NotFountPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
