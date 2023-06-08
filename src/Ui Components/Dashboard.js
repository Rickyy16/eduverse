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
import Notifications from "./Notifications";
import Notes from "./Notes";
import TestPapers from "./TestPapers";
import Feedback from "./Feedback";
import GiveNote from './GiveNote';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Dashboard = ({ handleCallBack, log, userName }) => {

    const [loading, setLoading] = useState(false)

    const [activePage, setActivePage] = useState("")
    const [open, setOpen] = React.useState(false);
    const [snack, setSnack] = useState(true)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1200)

        if (log) {
            setTimeout(() => {
                setSnack(false)
            }, 4000)
        }
        else{
            setSnack(false) 
        }
        scrollWindow()
    }, []);


    const removeLocalStorage = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("emailId")
        localStorage.removeItem("phone")
        localStorage.removeItem("userName")
        localStorage.removeItem("userId")
        localStorage.removeItem("database")
    }

    const handleLogOut = () => {

        signOut(auth).then(() => {
            console.log("Sign Out Succesfully")
            removeLocalStorage()
            toast.success("Log Out Succesfully")
            handleCallBack(false)
            navigate("/")
        }).catch((error) => {
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


    return (
        <>
            {loading ? <Loader /> :

                <>

                    {/* ------ Navbar ------ */}
                    <Navbar newCallBack={callBack} handleClickOpen={handleClickOpen} />
                    {/* ------ Navbar End ------ */}

                    {/* ------Main------- */}

                    {activePage === "" && <Home newCallBack={callBack} activePage={activePage} />}
                    {activePage === "notifications" && <Notifications />}
                    {activePage === "notes" && <Notes />}
                    {activePage === "givenote" && <GiveNote />}
                    {activePage === "testpapers" && <TestPapers />}
                    {activePage === "feedback" && <Feedback />}

                    {/* ------Main End------- */}

                    {/* Footer */}

                    <Footer />
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        id="dialog"
                    >
                        <h4 className="dialog-title">
                            Do you want to Log Out?
                        </h4>
                        <div className='d-flex flex-row justify-content-between dialog-btns'>
                            <Button variant="outlined" color="error" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="outlined" color="secondary" onClick={handleLogOut}>
                                Log Out
                            </Button>
                        </div>
                    </Dialog>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={snack}
                        key={"top" + "center"}
                    >
                        <Alert sx={{ width: '100%', backgroundColor: "#eae1f0", color: "#1e1d1f" }}>
                            Welcome! {userName}
                        </Alert>
                    </Snackbar>

                    {/* Footer End */}
                </>

            }

        </>
    )
}

export default Dashboard