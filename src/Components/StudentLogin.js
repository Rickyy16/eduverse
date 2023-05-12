import React, { useEffect, useState } from 'react'
import "../Css/StudentLogin.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import Aos from 'aos'
import { Toaster, toast } from 'react-hot-toast';

const StudentLogin = (props) => {

    const [formMargin, setFormMargin] = useState("");
    const [textMargin, setTextMargin] = useState("");

    const [sliderTab, setSliderTab] = useState("")
    const [lableSignup, setLableSignup] = useState([])
    const [lableLogin, setLableLogin] = useState("")


    const navigate = useNavigate()

    // Reserve States For Signup Credentials

    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "", password2: "" })
    const [loginInput, setLoginInput] = useState({ emaill: "", passwordd: "" })

    //--------------------------

    const signUpClick = () => {
        setFormMargin("-50%")
        setTextMargin("-50%")
        setSliderTab("50%")
        setLableSignup(["#fff", "default", "none"])
        setLableLogin("#000")
    }

    const loginClick = () => {
        setFormMargin("0%")
        setTextMargin("0%")
        setSliderTab("")
        setLableSignup([])
        setLableLogin("")
    }

    const signUpLinkClick = (event) => {
        event.preventDefault()
        signUpClick()
        setSliderTab("50%")
        setLableSignup(["#fff", "default", "none"])
        setLableLogin("#000")

    }

    useEffect(() => {
        Aos.init();
        loginClick()
    }, [])

    // ------------------------------------------------------------

    const handleSignupChange = (e) => {

        const iname = e.target.name;
        const ivalue = e.target.value;

        return setSignupInput((preval) => {
            return {
                ...preval,
                [iname]: ivalue
            }
        })
    }

    const handleLoginChange = (e) => {

        const iname = e.target.name;
        const ivalue = e.target.value;

        return setLoginInput((preval) => {
            return {
                ...preval,
                [iname]: ivalue
            }
        })
    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: signupInput.name
        }).then(() => {
            console.log("Display Name Upadated")
        }).catch((error) => {
            console.log(error)
        });
    }

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

    const handleSignupSubmit = (e) => {
        e.preventDefault()
        if (signupInput.name, signupInput.email, signupInput.password, signupInput.password2 !== "") {
            if (signupInput.password === signupInput.password2) {
                //firebase code
                createUserWithEmailAndPassword(auth, signupInput.email, signupInput.password)
                    .then((result) => {
                        // Signed in 
                        updateDisplayName()
                        console.log(result)
                        loginClick()
                        setSignupInput({ name: "", email: "", password: "", password2: "" })
                        toast.success("Signed Up Successfully")

                        // ...
                    })
                    .catch((error) => {
                        console.log(error.code)
                        toast.error(error.message)
                        // ..
                    });
            }
            else {
                toast.error("Password Mismatched")
            }
        }
        else {
            toast.error("Please Fill All the Fields")
        }
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (loginInput.emaill, loginInput.passwordd !== "") {
            //firebase code
            signInWithEmailAndPassword(auth, loginInput.emaill, loginInput.passwordd)
                .then((result) => {
                    // Signed in 
                    console.log(result)
                    setLocalStorage()
                    toast.success("Log in Successfully")
                    props.handleCallBack(true)
                    navigate("/dashboard")

                    // ...
                })
                .catch((error) => {
                    if(error.message==="Firebase: Error (auth/wrong-password)."){
                        toast.error("Wrong Password or Email")
                    }
                });

        }
        else {
            toast.error("Please Fill All the Fields")
        }
    }

    return (
        <>
            <div className="main">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="wrapper" data-aos="zoom-in" data-aos-delay="100">
                    <div className="title-text">
                        <div className="title login" style={{ marginLeft: textMargin }}>
                            Student Login
                        </div>
                        <div className="title signup">
                            Signup Form
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="slide-controls">
                            <input type="radio" name="slide" id="login" />
                            <input type="radio" name="slide" id="signup" />
                            <label for="login" className="slide login" style={{ color: lableLogin }} onClick={loginClick}>Login</label>
                            <label for="signup" className="slide signup" style={{
                                color:
                                    lableSignup[0],
                                cursor: lableSignup[1],
                                userSelect: lableSignup[2]
                            }} onClick={signUpClick}>Signup</label>
                            <div className="slider-tab" style={{ left: sliderTab }}></div>
                        </div>
                        <div className="form-inner">
                            <form action="" className="login" style={{ marginLeft: formMargin }}>
                                <div className="field">
                                    <input type="text" placeholder="Email Address" name="emaill" id="emaill" required onChange={handleLoginChange} value={loginInput.emaill} />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" name="passwordd" id="passwordd" required onChange={handleLoginChange} value={loginInput.passwordd} />
                                </div>
                                <div className="pass-link">
                                    <Link to="#">Forgot password?</Link>
                                </div>
                                <div className="field btn">
                                    <div className="btn-layer"></div>
                                    <button type="submit" id="login-Btn" onClick={handleLoginSubmit}>Login</button>
                                </div>
                                <div className="signup-link">
                                    Not a member? <Link to="/" id="signuplink" onClick={signUpLinkClick}>Signup now</Link>
                                </div>
                            </form>
                            <form action="" className="signup">
                                <div className="field">
                                    <input type="text" placeholder="Your Name" name="name" id="name" onChange={handleSignupChange} value={signupInput.name} required />
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Email Address" name="email" id="email" onChange={handleSignupChange} value={signupInput.email} required />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" name="password" id="password" onChange={handleSignupChange} value={signupInput.password} required />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Check Password" name="password2" id="password2" onChange={handleSignupChange} value={signupInput.password2} required />
                                </div>
                                <div className="field btn">
                                    <div className="btn-layer"></div>
                                    <button type="submit" id="signup-Btn" onClick={handleSignupSubmit} >Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default StudentLogin