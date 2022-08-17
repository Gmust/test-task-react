import React from 'react';
import './App.css'
import {BrowserRouter} from "react-router-dom";
import Router from './components/Router'
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <Router/>
        </BrowserRouter>
    );
};

export default App;