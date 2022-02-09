import React from "react";
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserPage from "./containers/UserPage/UserPage";
import NotFound from "./containers/NotFound/NotFound";
import MainPage from "./containers/MainPage/MainPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'main'} element={<MainPage/>}/>
                    <Route path={'user'} element={<UserPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
