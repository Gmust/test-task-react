import React, {useEffect, useState} from 'react';
import './main.css'
import {userApi} from "../../service/api";
import {IUser} from "../../models/User";
import UsersItem from "./UsersItem/UsersItem";

const Main = () => {

    const [users,setUsers] = useState<IUser[]>([]);

        useEffect(()=>{
             userApi.getUsers().then(data => setUsers(data))
        },[])

    if(!users.length){
        return  <div className='errorStyle'>Something wrong! Try to load users later!</div>
    }

    return (
        <div>
            {users.map(i =>
               <UsersItem key={i.id} id={i.id} firstName={i.firstName} lastName={i.lastName} />
            )}
        </div>
    );
};

export default Main;