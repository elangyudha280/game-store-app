import React from "react";
import { Navigate,Outlet } from "react-router-dom";



const ProtectedLogin = ()=>{

    let userStorage =localStorage.getItem('user'); 

    if(userStorage){
        console.log('user ada')
        return <Navigate to="/dashboard" replace/>
    }
    console.log('tidak ada')
    return <Outlet/> 
}

export default ProtectedLogin;