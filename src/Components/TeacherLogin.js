import React, { useEffect, useState } from 'react'
import "../Css/TeacherLogin.css"
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

const TeacherLogin = () => {

    const [formMargin, setFormMargin] = useState("");
    const [textMargin, setTextMargin] = useState("");

    const [sliderTab, setSliderTab] = useState("")
    const [lableSignup, setLableSignup] = useState([])
    const [lableLogin, setLableLogin] = useState("")

    const navigate = useNavigate()

    // Reserve States For Signup Credentials

    const [mobileInput, setMobileInput] = useState(null)
    const [otpInput, setOtpInput] = useState(null)

    //--------------------------

    const otpClick = () => {
        if (mobileInput!==null) {
            if(typeof(mobileInput) !== Number){
            setFormMargin("-50%")
        setTextMargin("-55%")
        setSliderTab("50%")
        setLableSignup(["#fff", "default", "none"])
        setLableLogin("#000")
        console.log(typeof mobileInput)
            }
            else{
                alert("Please Enter Number")
            }
        } 
        else {
            alert("Please Enter Mobile Number")
        }
    }

    const mobileClick = () => {
        setFormMargin("0%")
        setTextMargin("0%")
        setSliderTab("")
        setLableSignup([])
        setLableLogin("")
    }

    useEffect(()=>{
        mobileClick()
    },[])

    // ------------------------------------------------------------

    const handleOtpChange = (e) => {

        return setOtpInput(e.target.value)
    }

    const handlemobileChange = (e) => {

        return setMobileInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        // if(TsignupInput.email,TsignupInput.password,TsignupInput.password2 !== ""){
        //     if (TsignupInput.password === TsignupInput.password2) {
        //         //firebase code
        //         createUserWithEmailAndPassword(auth,TsignupInput.email, TsignupInput.password)
        //           .then((result) => {
        //             // Signed in 
        //             console.log("Signed Up Succesfully")
        //             console.log(result)
        //             mobileClick()
        //             alert("Signed Up Succesfully")
                    
        //             // ...
        //           })
        //           .catch((error) => {
        //             console.log(error.code)
        //             console.log(error.message)
        //             alert(error.message)
        //             // ..
        //           });
        //       }
        //       else {
        //         alert("Password Mismatched")
        //       }
        // }
        // else{
        //     alert("Please Fill All the Fieldds")
        // }
    }

    const handleSendCode = (e)=>{
        e.preventDefault()
        if (mobileInput!==null) {
            setFormMargin("-50%")
        setTextMargin("-55%")
        setSliderTab("50%")
        setLableSignup(["#fff", "default", "none"])
        setLableLogin("#000")
        } 
        else {
            alert("Please Enter Mobile Number")
        }
        

        
    }

    return (
        <>
            <div className="mainn">
                <div className="wrapperr">
                    <div className="title-text">
                        <div className="title mobile" style={{ marginLeft: textMargin }}>
                            Teachers Corner
                        </div>
                        <div className="title verify-otp">
                            Login
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="slide-controls">
                            <input type="radio" name="slide" id="mobile" />
                            <input type="radio" name="slide" id="verify-otp" />
                            <label for="mobile" className="slide mobile" style={{ color: lableLogin }} onClick={mobileClick}>Mobile</label>
                            <label for="verify-otp" className="slide verify-otp" style={{
                                color:
                                    lableSignup[0],
                                cursor: lableSignup[1],
                                userSelect: lableSignup[2]
                            }} onClick={otpClick}>Verify OTP</label>
                            <div className="slider-tabb" style={{ left: sliderTab }}></div>
                        </div>
                        <div className="form-inner">
                            <form action="" className="mobile" style={{ marginLeft: formMargin }}>
                                <div className="fieldd">
                                    <input type="tel" placeholder="Enter Mobile Number" name="mobile" id="mobile" required onChange={handlemobileChange} value={mobileInput} />
                                </div>
                                <div className="fieldd btn">
                                    <div className="btn-layerr"></div>
                                    <input type="submit" value="Send Verification Code" onClick={handleSendCode} />
                                </div>
                                <div className="student-link">
                                    Login as Student ? <Link to="/studentlogin" >Click here</Link>
                                </div>
                            </form>
                            <form action="" className="verify-otp">
                                <div className="fieldd">
                                    <input type="tel" placeholder="Enter Verification Code" name="otp" id="otp" onChange={handleOtpChange} value={otpInput} required  />
                                </div>
                                <div className="fieldd btn">
                                    <div className="btn-layerr"></div>
                                    <input type="submit" value="Submit" onClick={handleSubmit}  />
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