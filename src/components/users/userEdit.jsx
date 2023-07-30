import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
const UserEdit = () => {
    const params = useParams()
    const {userId} = params
    return <>
        <h1>Edit User Page</h1>
        <ul>
            <li><NavLink to={"/users/" + userId} >User profile Page</NavLink></li>
            <li><NavLink to={"/users/" + (Number(userId) + 1)} >Another User</NavLink></li>
            <li><NavLink to="/users" >Users List Page</NavLink></li>
        </ul> 
    </>;
}
 
export default UserEdit;