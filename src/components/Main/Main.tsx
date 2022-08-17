import React, {useEffect, useState} from 'react';
import './main.css'
import UsersItem from "./UsersItem/UsersItem";
import {testApi} from "../../service/api";

const Main = () => {

    const [idList, setIdList] = useState([]);

    useEffect(() => {
            testApi.getList().then(data => (setIdList(data?.data)))
    }, [])



    if (!idList?.length) {
        return <h1 data-testid={'errorElem'} className='errorStyle'>Something wrong! Try to load users later! Or try to reload page!
            <button data-testid={'reloadBtn'} className='errorBtnStyle' onClick={()=>{testApi.getList().then(data => (setIdList(data?.data)))}}>Reload</button>
        </h1>
    }

    return (
        <div>
            <label>User List</label>
            {idList.map(i =>
                <UsersItem key={i} id={i}/>
            )}
        </div>
    );
};

export default Main;