import React from "react";
import { Navigate,Outlet } from "react-router-dom";



// fungsi protected 
const ProtectedDashboard =()=>{
    if(!localStorage.getItem('user')){
        console.log('user tidak ada')
        return <Navigate to='/' replace/>
    }
    console.log('user ada')
    return <Outlet/>
}

export default ProtectedDashboard;