import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
const UserProfile = () => {
    const params = useParams()
    const {userId} = params
    return <>
        <h1>UserPage</h1>
        <ul>
            <li><NavLink to={"/users"} >Users List Page</NavLink></li>
            <li><NavLink to={"edit"} >Edit this user</NavLink></li>         
        </ul> 
        <p>userId: {userId}</p>
    </>;
}
 
export default UserProfile;