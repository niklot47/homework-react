import React from "react";
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Users from "./components/Users/Users";
import CarLayout from "./components/CarLayout/CarLayout";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'cars'} element={<CarLayout/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
