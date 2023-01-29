import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import App from "../component/App";



// fungsi protected 
const ProtectedDashboard =()=>{
    if(!localStorage.getItem('token')){
        return <App/>
    }
    
    return <Outlet/>
}

export default ProtectedDashboard;