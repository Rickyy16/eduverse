import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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

    useEffect(() => {
        setUserName(localStorage.getItem("userName"))
        setToken(localStorage.getItem("token"))
        setUserId(localStorage.getItem("userId"))
        setEmail(localStorage.getItem("email"))
    },[log])

    const callBack = (childData) => {
        return setLog(childData)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!userId ? <Landing /> : <Navigate to="/dashboard" />} />
                <Route path="/studentlogin" element={!userId ? <StudentLogin handleCallBack={callBack} /> : <Navigate to="/dashboard" />} />
                <Route path="/teacherlogin" element={!userId ? <TeacherLogin /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={userId ? <Dashboard name={userName} handleCallBack={callBack} /> : <Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing