import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import Navbar from './Navbar';
import $ from 'jquery';
import "../Css/Dashboard.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
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

            {/* ------ Navbar ------ */}
            <Navbar handleLogOut={handleLogOut} />
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

            <footer className="ftco-footer ftco-no-pt">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">About</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                                    <li className=""><a href="#"><span className="fa fa-twitter" /></a></li>
                                    <li className=""><a href="#"><span className="fa fa-facebook" /></a></li>
                                    <li className=""><a href="#"><span className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Help Desk</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">Customer Care</a></li>
                                    <li><a href="#" className="py-2 d-block">Legal Help</a></li>
                                    <li><a href="#" className="py-2 d-block">Services</a></li>
                                    <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                                    <li><a href="#" className="py-2 d-block">Refund Policy</a></li>
                                    <li><a href="#" className="py-2 d-block">Call Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Recent Courses</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">Computer Engineering</a></li>
                                    <li><a href="#" className="py-2 d-block">Web Design</a></li>
                                    <li><a href="#" className="py-2 d-block">Business Studies</a></li>
                                    <li><a href="#" className="py-2 d-block">Civil Engineering</a></li>
                                    <li><a href="#" className="py-2 d-block">Computer Technician</a></li>
                                    <li><a href="#" className="py-2 d-block">Web Developer</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon fa fa-map-marker" /><span className="text">203 Fake St. Mountain
                                            View, San Francisco, California, USA</span></li>
                                        <li><a href="#"><span className="icon fa fa-phone" /><span className="text">+2 392 3929
                                            210</span></a></li>
                                        <li><a href="#"><span className="icon fa fa-paper-plane" /><span className="text">info@yourdomain.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright ©
                                All rights reserved | This template
                                is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}

export default Dashboard