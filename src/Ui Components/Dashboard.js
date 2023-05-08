import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Css/Dashboard.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../Css/css/owl.carousel.min.css"
import "../Css/css/owl.theme.default.min.css"
import "../Css/css/magnific-popup.css"
import "../Css/css/bootstrap-datepicker.css"
import "../Css/css/jquery.timepicker.css"
// import "../Css/css/flaticon.css"
import bg from "../images/bg2.jpg"

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
            navigate("/dashboard")
            alert("Sign Out Succesfully")
        }).catch((error) => {
            // An error happened.
            console.log(error.message)
        });
    }

    //   -----------------------------------------------------------------

    return (
        <>
            {/* <div style={{ textAlign: "center", color: "black", paddingTop: "100px", fontSize: "70px" }}>
        <div >Welcome {props.name}</div>
        <button onClick={handleLogOut}>Log out</button>
      </div> */}

            {/* ------ Navbar ------ */}

            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/dashboard"><span>Edu</span>Verse</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Course</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Instructor</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Blog</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ------ Navbar End ------ */}

            {/* ---Hero---- */}

            <div className="hero-wrap js-fullheight d-flex align-items-center" style={{ backgroundImage: `url(${bg})` }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
                        <div className="col-md-7">
                            <span className="subheading">Welcome to EduVerse</span>
                            <h1 className="mb-4">We Are Online Platform For Make Learn</h1>
                            <p className="caps">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                            <p className="mb-0"><a href="#" className="btn btn-primary">Our Course</a> <a href="#" className="btn btn-white">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---Hero-End---- */}

            {/* ----Form---- */}

            {/* <section className="ftco-section ftco-no-pb ftco-no-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7" />
                        <div className="col-md-5 order-md-last">
                            <div className="login-wrap p-4 p-md-5">
                                <h3 className="mb-4">Register Now</h3>
                                <form action="#" className="signup-form">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">Full Name</label>
                                        <input type="text" className="form-control" placeholder="John Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label" htmlFor="email">Email Address</label>
                                        <input type="text" className="form-control" placeholder="johndoe@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label" htmlFor="password">Password</label>
                                        <input id="password-field" type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label" htmlFor="password">Confirm Password</label>
                                        <input id="password-field" type="password" className="form-control" placeholder="Confirm Password" />
                                    </div>
                                    <div className="form-group d-flex justify-content-end mt-4">
                                        <button type="submit" className="btn btn-primary submit"><span className="fa fa-paper-plane" /></button>
                                    </div>
                                </form>
                                <p className="text-center">Already have an account? <a href="#signin">Sign In</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* ----Form-End---- */}

            {/* ----------------------------------- */}

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center">
                            <span className="subheading">Start Learning Today</span>
                            <h2 className="mb-4">Browse Online Course Category</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-lg-2">
                            <a href="#" className="course-category img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/work-1.jpg)' }}>
                                <div className="text w-100 text-center">
                                    <h3>IT &amp; Software</h3>
                                    <span>100 course</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <a href="#" className="course-category img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/work-9.jpg)' }}>
                                <div className="text w-100 text-center">
                                    <h3>Music</h3>
                                    <span>100 course</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <a href="#" className="course-category img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/work-3.jpg)' }}>
                                <div className="text w-100 text-center">
                                    <h3>Photography</h3>
                                    <span>100 course</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <a href="#" className="course-category img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/work-5.jpg)' }}>
                                <div className="text w-100 text-center">
                                    <h3>Marketing</h3>
                                    <span>100 course</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <a href="#" className="course-category img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/work-8.jpg)' }}>
                                <div className="text w-100 text-center">
                                    <h3>Health</h3>
                                    <span>100 course</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 col-lg-2">
                            <a href="#" className="course-category img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/work-6.jpg)' }}>
                                <span className="text w-100 text-center">
                                    <h3>Audio Video</h3>
                                    <span>100 course</span>
                                </span>
                            </a>
                        </div>
                        <div className="col-md-12 text-center mt-5">
                            <a href="#" className="btn btn-secondary">See All Courses</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center">
                            <span className="subheading">Start Learning Today</span>
                            <h2 className="mb-4">Pick Your Course</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="project-wrap">
                                <a href="#" className="img" style={{ backgroundImage: 'url(images/work-1.jpg)' }}>
                                    <span className="price">Software</span>
                                </a>
                                <div className="text p-4">
                                    <h3><a href="#">Design for the web with adobe photoshop</a></h3>
                                    <p className="advisor">Advisor <span>Tony Garret</span></p>
                                    <ul className="d-flex justify-content-between">
                                        <li><span className="flaticon-shower" />2300</li>
                                        <li className="price">$199</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-wrap">
                                <a href="#" className="img" style={{ backgroundImage: 'url(images/work-2.jpg)' }}>
                                    <span className="price">Software</span>
                                </a>
                                <div className="text p-4">
                                    <h3><a href="#">Design for the web with adobe photoshop</a></h3>
                                    <p className="advisor">Advisor <span>Tony Garret</span></p>
                                    <ul className="d-flex justify-content-between">
                                        <li><span className="flaticon-shower" />2300</li>
                                        <li className="price">$199</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-wrap">
                                <a href="#" className="img" style={{ backgroundImage: 'url(images/work-3.jpg)' }}>
                                    <span className="price">Software</span>
                                </a>
                                <div className="text p-4">
                                    <h3><a href="#">Design for the web with adobe photoshop</a></h3>
                                    <p className="advisor">Advisor <span>Tony Garret</span></p>
                                    <ul className="d-flex justify-content-between">
                                        <li><span className="flaticon-shower" />2300</li>
                                        <li className="price">$199</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-wrap">
                                <a href="#" className="img" style={{ backgroundImage: 'url(images/work-4.jpg)' }}>
                                    <span className="price">Software</span>
                                </a>
                                <div className="text p-4">
                                    <h3><a href="#">Design for the web with adobe photoshop</a></h3>
                                    <p className="advisor">Advisor <span>Tony Garret</span></p>
                                    <ul className="d-flex justify-content-between">
                                        <li><span className="flaticon-shower" />2300</li>
                                        <li className="price">$199</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-wrap">
                                <a href="#" className="img" style={{ backgroundImage: 'url(images/work-5.jpg)' }}>
                                    <span className="price">Software</span>
                                </a>
                                <div className="text p-4">
                                    <h3><a href="#">Design for the web with adobe photoshop</a></h3>
                                    <p className="advisor">Advisor <span>Tony Garret</span></p>
                                    <ul className="d-flex justify-content-between">
                                        <li><span className="flaticon-shower" />2300</li>
                                        <li className="price">$199</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-wrap">
                                <a href="#" className="img" style={{ backgroundImage: 'url(images/work-6.jpg)' }}>
                                    <span className="price">Software</span>
                                </a>
                                <div className="text p-4">
                                    <h3><a href="#">Design for the web with adobe photoshop</a></h3>
                                    <p className="advisor">Advisor <span>Tony Garret</span></p>
                                    <ul className="d-flex justify-content-between">
                                        <li><span className="flaticon-shower" />2300</li>
                                        <li className="price">$199</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: 'url(images/bg_4.jpg)' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                            <div className="block-18 d-flex align-items-center">
                                <div className="icon"><span className="flaticon-online" /></div>
                                <div className="text">
                                    <strong className="number" data-number={400}>0</strong>
                                    <span>Online Courses</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center counter-wrap">
                            <div className="block-18 d-flex align-items-center">
                                <div className="icon"><span className="flaticon-graduated" /></div>
                                <div className="text">
                                    <strong className="number" data-number={4500}>0</strong>
                                    <span>Students Enrolled</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center counter-wrap">
                            <div className="block-18 d-flex align-items-center">
                                <div className="icon"><span className="flaticon-instructor" /></div>
                                <div className="text">
                                    <strong className="number" data-number={1200}>0</strong>
                                    <span>Experts Instructors</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center counter-wrap">
                            <div className="block-18 d-flex align-items-center">
                                <div className="icon"><span className="flaticon-tools" /></div>
                                <div className="text">
                                    <strong className="number" data-number={300}>0</strong>
                                    <span>Hours Content</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-about img">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-12 about-intro">
                            <div className="row">
                                <div className="col-md-6 d-flex">
                                    <div className="d-flex about-wrap">
                                        <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/about-1.jpg)' }}>
                                        </div>
                                        <div className="img-2 d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-md-5 py-5">
                                    <div className="row justify-content-start pb-3">
                                        <div className="col-md-12 heading-section">
                                            <span className="subheading">Enhanced Your Skills</span>
                                            <h2 className="mb-4">Learn Anything You Want Today</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                                                right at the coast of the Semantics, a large language ocean. A small river named
                                                Duden flows by their place and supplies it with the necessary regelialia.</p>
                                            <p><a href="#" className="btn btn-primary">Get in touch with us</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section testimony-section bg-light">
                <div className="overlay" style={{ backgroundImage: 'url(images/bg_2.jpg)' }} />
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-md-7 heading-section">
                            <span className="subheading">Testimonial</span>
                            <h2 className="mb-4">What Are Students Says</h2>
                        </div>
                    </div>
                </div>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="carousel-testimony owl-carousel">
                                <div className="item">
                                    <div className="testimony-wrap py-4">
                                        <div className="text">
                                            <p className="star">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </p>
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{ backgroundImage: 'url(images/person_1.jpg)' }} />
                                                <div className="pl-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap py-4">
                                        <div className="text">
                                            <p className="star">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </p>
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{ backgroundImage: 'url(images/person_2.jpg)' }} />
                                                <div className="pl-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap py-4">
                                        <div className="text">
                                            <p className="star">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </p>
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{ backgroundImage: 'url(images/person_3.jpg)' }} />
                                                <div className="pl-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap py-4">
                                        <div className="text">
                                            <p className="star">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </p>
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{ backgroundImage: 'url(images/person_1.jpg)' }} />
                                                <div className="pl-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap py-4">
                                        <div className="text">
                                            <p className="star">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </p>
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{ backgroundImage: 'url(images/person_2.jpg)' }} />
                                                <div className="pl-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* -------------------------------------------------------------------------------- */}



        </>
    )
}

export default Dashboard