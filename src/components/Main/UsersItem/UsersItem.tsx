import React from 'react';
import './usersItem.css'
import {useNavigate} from "react-router-dom";


type TProps ={
    firstName: string,
    lastName: string,
    id:number
}

const UsersItem =({firstName,lastName, id}:TProps) => {

    const navigate = useNavigate();
    const handleClick =() =>{
                navigate('/user/' + id  )
    }

    return (
        <div className='itemsWrapper'>
            <div className='itemStyle'>
                <p onClick={()=>handleClick()}>{firstName} {lastName}</p>
            </div>
        </div>
    );
};

export default UsersItem;