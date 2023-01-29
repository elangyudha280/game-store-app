import React from "react";
import { Navigate,Outlet } from "react-router-dom";



const ProtectedLogin = ()=>{

    let userToken =localStorage.getItem('token'); 

    if(userToken){
        return <Navigate to="dashboard" replace/>
    }
    
    return <Outlet/> 
}

export default ProtectedLogin;