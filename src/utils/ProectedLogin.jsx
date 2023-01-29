import React from "react";
import { Navigate,Outlet } from "react-router-dom";



const ProtectedLogin = ({children})=>{

    let userToken =localStorage.getItem('token'); 

    if(userToken){
        return <Navigate to="/dashboard" replace={true}/>
    }
    
    return <>{children}</> 
}

export default ProtectedLogin;