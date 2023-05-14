import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { toast } from 'react-hot-toast';
import $ from 'jquery';
import "../Css/Dashboard.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import QueAns from "./QueAns";
import Notes from "./Notes";
import TestPapers from "./TestPapers";
import Feedback from "./Feedback";


const Dashboard = (props) => {

    const [loading, setLoading] = useState(false)

    const [activePage, setActivePage] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);

    const removeLocalStorage = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("emailId")
        localStorage.removeItem("userName")
        localStorage.removeItem("userId")
        localStorage.removeItem("database")
        // localStorage.removeItem("_grecaptcha")
    }

    const handleLogOut = () => {

        signOut(auth).then(() => {
            console.log("Sign Out Succesfully")
            removeLocalStorage()
            toast.success("Log Out Succesfully")
            props.handleCallBack(false)
            navigate("/dashboard")
        }).catch((error) => {
            // An error happened.
            toast.error(error.message)
        });
    }

    const callBack = (childData) => {
        return setActivePage(childData)
    }

    //   -----------------------------------------------------------------

    const scrollWindow = () => {
        $(window).scroll(function () {
            const $w = $(this);
            const st = $w.scrollTop();
            const navbar = $('.ftco_navbar');
            const sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }

            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }

            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }

            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }

                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };

    useEffect(() => {
        scrollWindow();
    }, []);


    return (
        <>
            {loading ? <Loader /> :

                <>

                    {/* ------ Navbar ------ */}
                    <Navbar handleLogOut={handleLogOut} newCallBack={callBack} />
                    {/* ------ Navbar End ------ */}

                    {/* ------Main------- */}

                    {activePage==="" && <Home />}
                    {activePage==="queans" && <QueAns />}
                    {activePage==="notes" && <Notes />}
                    {activePage==="testpapers" && <TestPapers />}
                    {activePage==="feedback" && <Feedback />}

                    {/* ------Main End------- */}

                    {/* Footer */}

                    <Footer />

                    {/* Footer End */}
                </>

            }




        </>
    )
}

export default Dashboard