import React, {useEffect, useState} from 'react';
import './user.css';
import {useParams} from "react-router-dom";
import {IUser} from "../../../models/User";
import {testApi} from "../../../service/api";

const User = () => {

    const [user, setUser] = useState({} as IUser);
    const [error, setError] = useState();

    const {id} = useParams();
    useEffect(()=>{
       testApi.getUser(id).then(data=>
           setUser(data.data))
    },[])




    const userArr = Object.entries(user);
    if(!userArr.length || user === undefined){
        return  <div className='errorStyle'>There is no profile with that id!</div>
    }


    return (
        <div className='userWrapper'>
            { userArr.map(([key, value]) =>
                <div className='userStyle' key={key}>{key} : {value}</div>
            )}
        </div>
    );
};

export default User;


