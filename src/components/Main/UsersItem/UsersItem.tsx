import React, {useEffect, useState} from 'react';
import './usersItem.css'
import {Link, useNavigate} from "react-router-dom";
import {testApi} from "../../../service/api";


type TProps = {

    id: string | null
}

const UsersItem = ({id}: TProps) => {

    const [users, setUsers] = useState<any>()

    const navigate = useNavigate();

    const handleSetUsers =async ()=>{
        const resp = await testApi.getUser(id)
          setUsers(resp?.data)
    }
    useEffect(() => {
        handleSetUsers();
    }, [])


    return (
        <div className='itemsWrapper'>

            {
                users ?
                    <div className='itemStyle'>
                        <Link to={'/user/'+ id}  data-testid={'user-item'} > {
                            users.firstName
                        }</Link>
                    </div>
                    : null
            }
        </div>
    );
};

export default UsersItem;