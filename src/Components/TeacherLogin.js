import React, { useEffect, useState } from 'react'
import "../Css/TeacherLogin.css"
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, updateProfile } from 'firebase/auth';
import { BsFillShieldLockFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Aos from 'aos';
import { Toaster, toast } from 'react-hot-toast';

const TeacherLogin = (props) => {

    const [formMargin, setFormMargin] = useState("-10%");
    const [textMargin, setTextMargin] = useState("");

    const [sliderTab, setSliderTab] = useState("")
    const [lablemobile, setLableMobile] = useState([])
    const [lableVerifyOtp, setLableVerifyOtp] = useState("")
    const [hideCaptcha, setHideCaptcha] = useState("")
    const [person, setPerson] = useState(false)

    const [teacher, setTeacher] = useState({ fname: "", lname: "" })

    const navigate = useNavigate()

    // Reserve States For Signup Credentials

    const [mobileInput, setMobileInput] = useState(null)
    const [otpInput, setOtpInput] = useState(null)

    //--------------------------

    const otpClick = (e) => {
        if (!window.recaptchaVerifier) {
            handleSendCode(e)
        }
        else {
            setFormMargin("-50%")
            setTextMargin("-55%")
            setSliderTab("50%")
            setLableMobile(["#fff", "default", "none"])
            setLableVerifyOtp("#000")
        }
    }

    const mobileClick = () => {
        setFormMargin("0%")
        setTextMargin("0%")
        setSliderTab("0%")
        setLableMobile([])
        setLableVerifyOtp("")
    }

    useEffect(() => {
        mobileClick()
        Aos.init()
    }, [])

    // ------------------------------------------------------------


    const setLocalStorage = () => {

        auth.onAuthStateChanged(async (user) => {
            console.log(user, "userrrrrrrrrlocal")
            if (user) {
                localStorage.setItem("token", user?.accessToken)
                localStorage.setItem("emailId", user?.email)
                localStorage.setItem("userName", user?.displayName)
                localStorage.setItem("userId", user?.uid)
                localStorage.setItem("database", user?.auth.app._options.databaseURL)
            }
            else {
                console.log("LocalStorage No Data")
            }
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (otpInput !== null) {
            window.confirmationResult.confirm(otpInput).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user, "8888888")
                if (user.displayName) {
                    setLocalStorage()
                    toast.success("Log in Successfully")
                    props.handleCallBack(true)
                    navigate("/dashboard")
                } else {
                    toast.success("Account Created Successfully")
                    setPerson(true)
                }

                
                // ...
            }).catch((error) => {
                console.log(error.message)
                if (error.message === "Firebase: Error (auth/invalid-verification-code).") {
                    toast.error("Wrong OTP")
                    setOtpInput(null)
                }
            });
        } else {
            toast.error("Please Enter OTP")
        }

    }

    const onCaptchaVerify = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'normal',
                'callback': (response) => {
                    handleSendCode()
                },
                'expired-callback': () => {
                    // Response expired. Ask user to solve reCAPTCHA again.
                    // ...
                }
            }, auth);
        }
    }

    const handleSendCode = (e) => {
        e.preventDefault()
        if (mobileInput !== null) {
            setHideCaptcha("")
            onCaptchaVerify()
            const appVerifier = window.recaptchaVerifier
            console.log(appVerifier)

            const formatMobileInput = "+" + mobileInput
            signInWithPhoneNumber(auth, formatMobileInput, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    //..
                    toast.success("OTP Sent Successfully")
                    setFormMargin("-50%")
                    setTextMargin("-55%")
                    setSliderTab("50%")
                    setLableMobile(["#fff", "default", "none"])
                    setLableVerifyOtp("#000")
                    setHideCaptcha("none")

                }).catch((error) => {
                    console.log(error)
                    if (error.message === "Firebase: TOO_SHORT (auth/invalid-phone-number).") {
                        toast.error("Invalid Phone Number")
                        setHideCaptcha("none")
                        setMobileInput("+" + 91)

                        // navigate("/teacherlogin")
                    } else if (error.message === "Firebase: Exceeded quota. (auth/quota-exceeded).") {
                        toast.error("Site is Busy Please Try Later")
                        setHideCaptcha("none")
                        setMobileInput("+" + 91)

                        // navigate("/teacherlogin")     
                    }
                    else if (error.message === "reCAPTCHA client element has been removed: 0") {
                        window.location.reload()
                        toast(
                            "Please Enter Mobile Number Again",
                            {
                                duration: 3000,
                            }
                        );
                    }
                });
        }
        else {
            toast.error("Please Enter Mobile Number")
        }
    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: teacher.fname
        }).then(() => {
            console.log("Display Name Updated")
        }).catch((error) => {
            console.log(error)
        });
    }

    const handleTChange = (e) => {
        const iname = e.target.name;
        const ivalue = e.target.value;

        return setTeacher((preval) => {
            return {
                ...preval,
                [iname]: ivalue
            }
        })
    }

    const handleLogin = () => {

        if (teacher.fname&&teacher.lname) {
            updateDisplayName()
        setLocalStorage()
        toast.success("Log in Successfully")
        props.handleCallBack(true)
        navigate("/dashboard")
        setPerson(false)
        } else if (teacher.fname&&!teacher.lname){
            toast.error("Enter Last Name")
        }else if (!teacher.fname&&teacher.lname){
            toast.error("Enter First Name")
        }else {
            toast.error("Please Fill All The Fields")
        }
        
    }

    return (
        <>
            <div className="mainn">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

                {person ?
                    <>
                        <div className="wrapperr pt-4 pb-5" data-aos="fade-left">
                            <div className="title-text">
                                <div className="title">
                                    <div className=''>Personal Details</div>
                                </div>
                            </div>
                            <div className="form-inner pt-3">
                                <form action="" className="personal">
                                    <div className="field">
                                        <input type="text" placeholder="First Name" name="fname" id="fname" value={teacher.fname} onChange={handleTChange} required />
                                    </div>
                                    <div className="field">
                                        <input type="text" placeholder="Last Name" name="lname" id="lname" value={teacher.lname} onChange={handleTChange} required />
                                    </div>
                                    <div className="field btn">
                                        <div className="btn-layer"></div>
                                        <button type="submit" id="submit-Btn" onClick={handleLogin} >Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </> :

                    <>
                        <div className="wrapperr" data-aos="zoom-in" data-aos-delay="100">
                            <div className="title-text">
                                <div className="title mobile" style={{ marginLeft: textMargin }}>
                                    <div className='mobile-icon'><BsTelephoneFill size={35} /></div>
                                </div>
                                <div className="title verify-otp">
                                    <div className='verify-icon'><BsFillShieldLockFill size={35} /></div>
                                </div>
                            </div>
                            <div className="form-container">
                                <div className="slide-controls">
                                    <input type="radio" name="slide" id="mobile" />
                                    <input type="radio" name="slide" id="verify-otp" />
                                    <label for="mobile" className="slide mobile" style={{ color: lableVerifyOtp }} onClick={mobileClick}>Mobile</label>
                                    <label for="verify-otp" className="slide verify-otp" style={{
                                        color:
                                            lablemobile[0],
                                        cursor: lablemobile[1],
                                        userSelect: lablemobile[2]
                                    }} onClick={otpClick}>Verify OTP</label>
                                    <div className="slider-tabb" style={{ left: sliderTab }}></div>
                                </div>
                                <div className="form-inner">
                                    <form action="" className="mobile" style={{ marginLeft: formMargin }}>
                                        <div className="fieldd fielddp">
                                            <PhoneInput country={"in"}
                                                onChange={setMobileInput} value={mobileInput}
                                                required />
                                        </div>
                                        <div className="fieldd btn">
                                            <div className="btn-layerr"></div>
                                            <button type="submit" onClick={handleSendCode}>Send Verification Code</button>
                                        </div>
                                        <div className="student-link">
                                            Login as Student ? <Link to="/studentlogin" >Click here</Link>
                                        </div>
                                    </form>
                                    <form action="" className="verify-otp">
                                        <div className="fieldd" id="otpinput">
                                            <OtpInput OTPLength={6} otpType="number"
                                                disabled={false}
                                                autoFocus onChange={setOtpInput} value={otpInput} required ></OtpInput>
                                        </div>
                                        <div className="fieldd btn">
                                            <div className="btn-layerr"></div>
                                            <button type="submit" onClick={handleSubmit} > Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="recaptcha-container" style={{ display: hideCaptcha }} ></div>
                    </>

                }

            </div >

        </>
    )
}

export default TeacherLogin