import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import Dashboard from "../component/Dashboard";



const ProtectedLogin = ()=>{

    let userToken =localStorage.getItem('token'); 

    if(userToken){
        return <Dashboard/>
    }
    
    return <Outlet/> 
}

export default ProtectedLogin;