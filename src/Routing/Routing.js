import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Landing from '../Components/Landing';
import StudentLogin from '../Components/StudentLogin';
import TeacherLogin from '../Components/TeacherLogin';
import Dashboard from '../Ui Components/Dashboard';
import Semester1 from '../Ui Components/Semesters/Semester1';
import Semester2 from '../Ui Components/Semesters/Semester2';
import Semester3 from '../Ui Components/Semesters/Semester3';
import Semester4 from '../Ui Components/Semesters/Semester4';
import Semester5 from '../Ui Components/Semesters/Semester5';
import Semester6 from '../Ui Components/Semesters/Semester6';
import Error from '../Ui Components/Error';

const Routing = () => {

    const [userName, setUserName] = useState("")
    const [token, setToken] = useState("")
    const [userId, setUserId] = useState("")
    const [email, setEmail] = useState("")
    const [database, setDatabase] = useState("")
    const [log, setLog] = useState(false)

    useEffect(() => {
        setUserName(localStorage.getItem("userName"))
        setToken(localStorage.getItem("token"))
        setUserId(localStorage.getItem("userId"))
        setEmail(localStorage.getItem("email"))
        setDatabase(localStorage.getItem("database"))

    }, [log])

    const callBack = (childData) => {
        return setLog(childData)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/eduverse/" element={<Navigate to="/" />} />
                <Route path="/" element={!userId || !database ? <Landing /> : <Navigate to="/dashboard" />} />
                <Route path="/studentlogin" element={!userId || !database ? <StudentLogin handleCallBack={callBack} /> : <Navigate to="/dashboard" />} />
                <Route path="/teacherlogin" element={!userId || !database ? <TeacherLogin handleCallBack={callBack} /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={userId && database === "https://major-project-clg-81254-default-rtdb.firebaseio.com" ? <Dashboard userName={userName} handleCallBack={callBack} log={log} /> : <Navigate to="/" />} />
                <Route path="/semester1" element={userId && database === "https://major-project-clg-81254-default-rtdb.firebaseio.com" ? <Semester1 />:<></> } />
                <Route path="/semester2" element={userId && database === "https://major-project-clg-81254-default-rtdb.firebaseio.com" ? <Semester2 />:<></> } />
                <Route path="/semester3" element={userId && database === "https://major-project-clg-81254-default-rtdb.firebaseio.com" ? <Semester3 />:<></> } />
                <Route path="/semester4" element={userId && database === "https://major-project-clg-81254-default-rtdb.firebaseio.com" ? <Semester4 />:<></> } />
                <Route path="/semester5" element={userId && database === "https://major-project-clg-81254-default-rtdb.firebaseio.com" ? <Semester5 />:<></> } />
                <Route path="/semester6" element={userId && database === "https://major-project-clg-81254-default-rtdb.firebaseio.com" ? <Semester6 />:<></> } />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing