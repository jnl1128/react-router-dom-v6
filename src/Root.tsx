import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
    // url이 /about이면 Outlet부분이 About 컴포너틑로 대체된다.
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;
