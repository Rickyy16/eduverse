import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Landing from '../Components/Landing';
import StudentLogin from '../Components/StudentLogin';
import TeacherLogin from '../Components/TeacherLogin';
import Dashboard from '../Ui Components/Dashboard';
import { auth } from '../Firebase/Firebase';

const Routing = () => {

    const [userName, setUserName] = useState("")
    const [token, setToken] = useState("")
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")
    const [log, setLog] = useState(false)
    const [database, setDatabase] = useState("")

    useEffect(() => {
        setUserName(localStorage.getItem("userName"))
        setToken(localStorage.getItem("token"))
        setUserId(localStorage.getItem("userId"))
        setEmail(localStorage.getItem("email"))
        setDatabase(localStorage.getItem("database"))

    },[log])

    const callBack = (childData) => {
        return setLog(childData)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!userId || !database ? <Landing /> : <Navigate to="/dashboard" />} />
                <Route path="/studentlogin" element={!userId || !database ? <StudentLogin handleCallBack={callBack} /> : <Navigate to="/dashboard" />} />
                <Route path="/teacherlogin" element={!userId || !database ? <TeacherLogin handleCallBack={callBack} /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={userId &&  database==="https://major-project-clg-81254-default-rtdb.firebaseio.com" ? <Dashboard name={userName} handleCallBack={callBack} /> : <Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing