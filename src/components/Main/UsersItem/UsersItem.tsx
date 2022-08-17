import React, {useEffect, useState} from 'react';
import './usersItem.css'
import {useNavigate} from "react-router-dom";
import {testApi} from "../../../service/api";


type TProps = {

    id: string | null
}

const UsersItem = ({id}: TProps) => {

    const [users, setUsers] = useState<any>()

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/user/' + id)
    }
    useEffect(() => {
        testApi.getUser(id).then(data => setUsers(data?.data))
    }, [])


    return (
        <div className='itemsWrapper'>

            {
                users ?
                    <div className='itemStyle'>
                        <p onClick={() => handleClick()}> {
                            users.firstName
                        }</p>
                    </div>
                    : null
            }
        </div>
    );
};

export default UsersItem;