import React, {useEffect, useState} from 'react';
import './main.css'
import UsersItem from "./UsersItem/UsersItem";
import {testApi} from "../../service/api";

const Main = () => {

    const [idList, setIdList] = useState([]);

    const loadId = async () => {
        const resp = await testApi.getList()
        setIdList(resp?.data)
    }

    useEffect(() => {
        loadId();
    }, [])



    if (!idList?.length) {
        return <h1 data-testid={'errorElem'} className='errorStyle'>Something wrong! Try to load users later! Or try to
            reload page!
            <button data-testid={'reloadBtn'} className='errorBtnStyle' onClick={() => {
                testApi.getList().then(data => (setIdList(data?.data)))
            }}>Reload</button>
        </h1>
    }

    return (
        <div data-testid={'users-page'}>
            <label>User List</label>
            {idList.map(i =>
                <div ><UsersItem  key={i} id={i}/></div>
            )}
        </div>
    );
};

export default Main;