import React, {useEffect} from 'react';
import './App.css'
import {BrowserRouter} from "react-router-dom";
import Router from './components/Router'
import Navbar from "./components/Navbar/Navbar";
import {useLocation} from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <Router/>
        </BrowserRouter>
    );
};

export default App;