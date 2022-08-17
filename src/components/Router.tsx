import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {


    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/user/:id' } element={<UserPage/>} />
            <Route path={'*'} element={<ErrorPage/>} />
        </Routes>
    );
};

export default Router;