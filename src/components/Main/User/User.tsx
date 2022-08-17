import React, {useEffect, useState} from 'react';
import './user.css';
import {userApi} from "../../../service/api";
import {useParams} from "react-router-dom";
import {IUser} from "../../../models/User";

const User = () => {

    const [user, setUser] = useState({} as IUser);
    const {id} = useParams();
    useEffect(()=>{
        userApi.getUser(id).then(data => setUser(data))
    },[id])


    const u = Object.entries(user)
    if (!u.length){
        return  <div className='errorStyle'>There is no user profile!</div>
    }



    return (
        <div className='userWrapper'>
            { u.map(([key, value]) =>
                <div className='userStyle' key={key}>{key} : {value}</div>
            )}
        </div>
    );
};

export default User;


/*
{u.map(value => <div className='userStyle' key={value.toString()}>
    <ul>
        <li>Name: {value[0]}</li>
        <li>Surname: {value[1]}</li>
        <li>Age: {value[2]}</li>
        <li>Gender: {value[3]}</li>
        <li>Country:{value[4]}</li>
    </ul>
</div>)}*/
