import React from "react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateComponent() {
 let auth;
    auth = localStorage.getItem("user");
    if(auth==""){
      console.log("auth"+auth);
      localStorage.setItem("user","Login");
    }

  auth = localStorage.getItem("user");
  // return auth != "Login" ? <Outlet /> : <Navigate to="/Login" />;
  return(
    <>
    {auth != "Login" ? <Outlet /> : <Navigate to="/Login" />};
    
    </>
  )
}

export default PrivateComponent;
