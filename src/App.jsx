import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Users from "./components/users";
import NavBar from "./components/navBar";
import Main from "./components/main";
import UserProfile from "./components/users/userProfile";
import UserEdit from "./components/users/userEdit";
import UsersList from "./components/users/userList";

function App() {
    return <>
        <div className="d-flex flex-column">
        <NavBar></NavBar>
        <Routes>
            <Route path="users/*" element={<Users />}>
                <Route index element={<UsersList/>} />
                <Route path=":userId" element={<UserProfile/>} />
                <Route path=":userId/edit" element={<UserEdit/>} />
            </Route>
            <Route path="" element={<Main/>} />
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        </div>
    </>;
}

export default App;
