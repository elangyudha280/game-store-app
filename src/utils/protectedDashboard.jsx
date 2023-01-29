import React from "react";
import { Navigate,Outlet } from "react-router-dom";



// fungsi protected 
const ProtectedDashboard =({children})=>{
    // if(!localStorage.getItem('token')){
    //     return <Navigate to='/' replace={true}/>
    // }
    
    // return <Outlet/>
 if(!localStorage.getItem('token')){
        return <Navigate to='/' replace={true}/>
    }

    return <>{children}</>
}

export default ProtectedDashboard;