import React from "react";
// import Link from "./Link";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return <>
        <h1>App Layout</h1>
        <NavLink to="/users">usersList</NavLink>
    </>;
}
 
export default NavBar;