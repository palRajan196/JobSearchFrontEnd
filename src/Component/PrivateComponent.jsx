import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";


function PrivateComponent() {
  const navigate = useNavigate();
 let auth;
    auth = localStorage.getItem("user");
    if(auth==""){
      console.log("auth"+auth);
      localStorage.setItem("user","Login");
      navigate("/Login");
    }

  auth = localStorage.getItem("user");
  
  return(
    <>
    {auth != "Login" ? <Outlet /> : <Navigate to="/Login" />};
    
    </>
  )
}

export default PrivateComponent;
