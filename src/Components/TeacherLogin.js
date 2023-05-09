import React, { useEffect, useState } from 'react'
import "../Css/TeacherLogin.css"
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { BsFillShieldLockFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import Aos from 'aos';
import { Toaster, toast } from 'react-hot-toast';

const TeacherLogin = () => {

    const [formMargin, setFormMargin] = useState("-10%");
    const [textMargin, setTextMargin] = useState("");

    const [sliderTab, setSliderTab] = useState("")
    const [lablemobile, setLableMobile] = useState([])
    const [lableVerifyOtp, setLableVerifyOtp] = useState("")

    const navigate = useNavigate()

    // Reserve States For Signup Credentials

    const [mobileInput, setMobileInput] = useState(null)
    const [otpInput, setOtpInput] = useState(null)

    //--------------------------

    const otpClick = () => {
        if (mobileInput !== "") {
            setFormMargin("-50%")
            setTextMargin("-55%")
            setSliderTab("50%")
            setLableMobile(["#fff", "default", "none"])
            setLableVerifyOtp("#000")
            // handleSendCode()
        }
        else {
            toast.error("Please Enter Mobile Number")
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


    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleSendCode = (e) => {
        e.preventDefault()
        if (mobileInput !== null) {
            onCaptchaVerify()
            console.log(window.recaptchaVerifier,"77777777777777777777")
            const appVerifier = window.recaptchaVerifier

            const formatMobileInput = "+" + mobileInput
            signInWithPhoneNumber(auth, formatMobileInput, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    // ...
                    setFormMargin("-50%")
                    setTextMargin("-55%")
                    setSliderTab("50%")
                    setLableMobile(["#fff", "default", "none"])
                    setLableVerifyOtp("#000")
                    toast.success("OTP Sent Successfully")
                }).catch((error) => {
                    toast.error(error)
                });
        }
        else {
            toast.error("Please Enter Mobile Number")
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

    return (
        <>
            <div className="mainn">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div id="recaptcha-container" ></div>

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
            </div >
        </>
    )
}

export default TeacherLogin