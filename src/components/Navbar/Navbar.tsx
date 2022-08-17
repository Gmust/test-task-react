import React from 'react';
import './navbar.css'
import {useNavigate} from "react-router-dom";

const Navbar = () => {


        const navigate = useNavigate()

    return (
        <div className='navbarWrapper'>
            <h1 onClick={()=> navigate('/')} >
                    Find Users!
            </h1>
        </div>
    );
};

export default Navbar;