import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Users = () => {
    return (<>
        <h1>Users Layout</h1>
        <NavLink to="/">MainPage</NavLink>
        <Outlet />
    </>);
}
 
export default Users;