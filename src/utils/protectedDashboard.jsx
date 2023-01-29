import React from "react";
import { Navigate,Outlet } from "react-router-dom";



// fungsi protected 
const ProtectedDashboard =()=>{
    if(!localStorage.getItem('token')){
        return <Navigate to='/' replace/>
    }
    
    return <Outlet/>
}

export default ProtectedDashboard;