import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {

  const navigate = useNavigate()

  const removeLocalStorage = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("emailId")
    localStorage.removeItem("userName")
    localStorage.removeItem("userId")
  }

  const handleLogOut = () => {

    signOut(auth).then(() => {
      console.log("Sign Out Succesfully")
      removeLocalStorage()
      props.handleCallBack(false) 
      navigate("/")
      alert("Sign Out Succesfully")
    }).catch((error) => {
      // An error happened.
      console.log(error.message)
    });
  }

  return (
    <>
    <div style={{textAlign:"center",color:"white",paddingTop:"100px",fontSize:"70px"}}>
      <div >Welcome {props.name}</div>
      <button onClick={handleLogOut}>Log out</button>
      </div>
    </>
  )
}

export default Dashboard