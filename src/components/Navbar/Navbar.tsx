import React from 'react';
import './navbar.css'
import {useNavigate} from "react-router-dom";

const Navbar = () => {


        const navigate = useNavigate()

    return (
        <div className='navbarWrapper'>
            <header onClick={()=> navigate('/')} >
                    Find Users!
            </header>
        </div>
    );
};

export default Navbar;