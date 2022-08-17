import React, {useEffect, useState} from 'react';
import './user.css';
import {useParams} from "react-router-dom";
import {IUser} from "../../../models/User";
import {testApi} from "../../../service/api";

const User = () => {

    const [user, setUser] = useState({} as IUser);

    const {id} = useParams();

    const handelSetUser = async () =>{
      const resp = await  testApi.getUser(id)
            setUser(resp?.data);
    }

    useEffect(()=>{
   handelSetUser();
    },[])


    if (user === undefined || null){
        return <div className='errorStyle'>This profile have not info!</div>
    }
    const userArr = Object.entries(user);


    if(!userArr.length ){
            return  <div className='errorStyle' data-testid="user-page-error" >There is no profile with that id!</div>
    }


    return (
        <div className='userWrapper' data-testid="user-page-error">
            { userArr.map(([key, value]) =>
                <div className='userStyle' key={key}>{key} : {value}</div>
            )}
        </div>
    );
};

export default User;


