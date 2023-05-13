import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { toast } from 'react-hot-toast';
import $ from 'jquery';
import "../Css/Dashboard.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import bg from "../Img/bg.png"
import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
// import QueAns from "./QueAns";
// import Notes from "./Notes";
// import TestPapers from "./TestPapers";
// import Contact from "./Contact";


const Dashboard = (props) => {

    const [loading, setLoading] = useState(false)

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
                    <Navbar handleLogOut={handleLogOut} />
                    {/* ------ Navbar End ------ */}

                    {/* ---Hero---- */}

                    {/* <BrowserRouter>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/home" element={<QueAns />} />
                            <Route path="/home" element={<Notes />} />
                            <Route path="/home" element={<TestPapers />} />
                            <Route path="/home" element={<Notes />} />
                        </Routes>
                    </BrowserRouter> */}

                    <div className="hero-wrap js-fullheight d-flex align-items-center" style={{ backgroundImage: `url(${bg})` }}>
                        <div className="overlay" />
                        <div className="container">
                            <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
                                <div className="col-md-7">
                                    <span className="subheading text-dark">Welcome to EduVerse</span>
                                    <h1 className="mb-4 text-dark">Online Learning Platform for Khaitan Students </h1>
                                    <p className="caps text-dark">Our Major Project will help our college students for their better learning and course understanding.</p>
                                    <p className="mb-0 "><Link to="/notes" className="btn btn-primary">Take Notes</Link> <Link to="/contact" className="btn btn-white">Contact Us</Link></p>
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

                    <section className="ftco-intro ftco-section ftco-no-pb">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 text-center">
                                    <div className="img" style={{ backgroundImage: 'url(images/bg_4.jpg)' }}>
                                        <div className="overlay" />
                                        <h2>We Are StudyLab An Online Learning Center</h2>
                                        <p>We can manage your dream building A small river named Duden flows by their place</p>
                                        <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Enroll Now</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ftco-section services-section">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-md-6 heading-section pr-md-5  d-flex align-items-center">
                                    <div className="w-100 mb-4 mb-md-0">
                                        <span className="subheading">Welcome to StudyLab</span>
                                        <h2 className="mb-4">We Are StudyLab An Online Learning Center</h2>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                                            Semantics, a large language ocean.</p>
                                        <div className="d-flex video-image align-items-center mt-md-4">
                                            <a href="#" className="video img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
                                                <span className="fa fa-play-circle" />
                                            </a>
                                            <h4 className="ml-4">Learn anything from StudyLab, Watch video</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                            <div className="services">
                                                <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-tools" /></div>
                                                <div className="media-body">
                                                    <h3 className="heading mb-3">Top Quality Content</h3>
                                                    <p>A small river named Duden flows by their place and supplies</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                            <div className="services">
                                                <div className="icon icon-2 d-flex align-items-center justify-content-center"><span className="flaticon-instructor" /></div>
                                                <div className="media-body">
                                                    <h3 className="heading mb-3">Highly Skilled Instructor</h3>
                                                    <p>A small river named Duden flows by their place and supplies</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                            <div className="services">
                                                <div className="icon icon-3 d-flex align-items-center justify-content-center"><span className="flaticon-quiz" /></div>
                                                <div className="media-body">
                                                    <h3 className="heading mb-3">World Class &amp; Quiz</h3>
                                                    <p>A small river named Duden flows by their place and supplies</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                            <div className="services">
                                                <div className="icon icon-4 d-flex align-items-center justify-content-center"><span className="flaticon-browser" /></div>
                                                <div className="media-body">
                                                    <h3 className="heading mb-3">Get Certified</h3>
                                                    <p>A small river named Duden flows by their place and supplies</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ftco-section bg-light">
                        <div className="container">
                            <div className="row justify-content-center pb-4">
                                <div className="col-md-12 heading-section text-center">
                                    <span className="subheading">Our Blog</span>
                                    <h2 className="mb-4">Recent Post</h2>
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="col-lg-4">
                                    <div className="blog-entry">
                                        <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_1.jpg")' }}>
                                        </a>
                                        <div className="text d-block">
                                            <div className="meta">
                                                <p>
                                                    <a href="#"><span className="fa fa-calendar mr-2" />Sept. 17, 2020</a>
                                                    <a href="#"><span className="fa fa-user mr-2" />Admin</a>
                                                    <a href="#" className="meta-chat"><span className="fa fa-comment mr-2" /> 3</a>
                                                </p>
                                            </div>
                                            <h3 className="heading"><a href="#">I'm not creative, Should I take this course?</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                                Consonantia...</p>
                                            <p><a href="blog.html" className="btn btn-secondary py-2 px-3">Read more</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog-entry">
                                        <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_2.jpg")' }}>
                                        </a>
                                        <div className="text d-block">
                                            <div className="meta">
                                                <p>
                                                    <a href="#"><span className="fa fa-calendar mr-2" />Sept. 17, 2020</a>
                                                    <a href="#"><span className="fa fa-user mr-2" />Admin</a>
                                                    <a href="#" className="meta-chat"><span className="fa fa-comment mr-2" /> 3</a>
                                                </p>
                                            </div>
                                            <h3 className="heading"><a href="#">I'm not creative, Should I take this course?</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                                Consonantia...</p>
                                            <p><a href="blog.html" className="btn btn-secondary py-2 px-3">Read more</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="blog-entry">
                                        <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_3.jpg")' }}>
                                        </a>
                                        <div className="text d-block">
                                            <div className="meta">
                                                <p>
                                                    <a href="#"><span className="fa fa-calendar mr-2" />Sept. 17, 2020</a>
                                                    <a href="#"><span className="fa fa-user mr-2" />Admin</a>
                                                    <a href="#" className="meta-chat"><span className="fa fa-comment mr-2" /> 3</a>
                                                </p>
                                            </div>
                                            <h3 className="heading"><a href="#">I'm not creative, Should I take this course?</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                                Consonantia...</p>
                                            <p><a href="blog.html" className="btn btn-secondary py-2 px-3">Read more</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* -------------------------------------------------------------------------------- */}
                    {/* Footer */}

                    <Footer />

                    {/* Footer End */}
                </>

            }




        </>
    )
}

export default Dashboard