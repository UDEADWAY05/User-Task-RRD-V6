import React from "react";
import { NavLink } from "react-router-dom";
const UsersList = () => {
    return <><h1>UsersPage</h1>
        <ul>
            <li><NavLink to={"0"} >User 0</NavLink></li>
            <li><NavLink to={"1"} >User 1</NavLink></li>
            <li><NavLink to={"2"} >User 2</NavLink></li>
            <li><NavLink to={"3"} >User 3</NavLink></li>
            <li><NavLink to={"4"} >User 4</NavLink></li>
        </ul>
    </>;
}
 
export default UsersList;