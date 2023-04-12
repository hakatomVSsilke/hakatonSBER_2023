import React from 'react';
import "./usersStyle.css"
import HeaderUsers from "./components/header/headerUsers";
import TableList from "./components/tableList/tableList";


const Users = () => {

    return (
        <>
            <HeaderUsers/>

            <TableList/>
        </>
    );
};

export default Users;