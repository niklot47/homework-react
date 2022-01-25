import React from "react";
import {NavLink, Routes, Route} from "react-router-dom";

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import NotFountPage from "./pages/NotFoundPage/NotFountPage";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";
import PostDetails from "./components/PostDetails/PostDetails";
import PostComments from "./components/PostComments/PostComments";
import UserAlbums from "./components/UserAlbums/UserAlbums";
import Photos from "./components/Photos/Photos";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={':posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={'albums/:id'} element={<UserAlbums/>}>
                            <Route path={':album'} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={':comments'} element={<PostComments/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFountPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
