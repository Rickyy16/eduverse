import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Css/Dashboard.css"
import "../Css/style.css"

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
      navigate("/")
      alert("Sign Out Succesfully")
    }).catch((error) => {
      // An error happened.
      console.log(error.message)
    });
  }

  return (
    <>
      {/* <div style={{ textAlign: "center", color: "black", paddingTop: "100px", fontSize: "70px" }}>
        <div >Welcome {props.name}</div>
        <button onClick={handleLogOut}>Log out</button>
      </div> */}
    {/* <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/loder.png" alt=""/>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Preloader Start -->/ */}
    <header>
        {/* <!-- Header Start --> */}
        <div className="header-area header-transparent">
            <div className="main-header ">
                <div className="header-bottom  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {/* <!-- Logo --> */}
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                    {/* <!-- Main-menu --> */}
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">                                                                                          
                                                <li class="active" ><a href="index.html">Home</a></li>
                                                <li><a href="courses.html">Courses</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="#">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                        <li><a href="elements.html">Element</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                                {/* <!-- Button --> */}
                                                <li classNameNameName="button-header margin-left "><a href="#" class="btn">Join</a></li>
                                                <li classNameNameName="button-header"><a href="login.html" class="btn btn3">Log in</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div> 
                            {/* <!-- Mobile Menu --> */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
    </header>
    <main>
        {/* <!--? slider Area Start--> */}
        <section className="slider-area ">
            <div className="slider-active">
                {/* <!-- Single Slider --> */}
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay="0.2s">Online learning<br/> platform</h1>
                                    <p data-animation="fadeInLeft" data-delay="0.4s">Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
                                    <a href="#" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.7s">Join htmlFor Free</a>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
        {/* <!-- ? services-area --> */}
        <div className="services-area">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon1.svg" alt=""/>
                            </div>
                            <div className="features-caption">
                                <h3>60+ UX courses</h3>
                                <p>The automated process all your website tasks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon2.svg" alt=""/>
                            </div>
                            <div className="features-caption">
                                <h3>Expert instructors</h3>
                                <p>The automated process all your website tasks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon3.svg" alt=""/>
                            </div>
                            <div className="features-caption">
                                <h3>Life time access</h3>
                                <p>The automated process all your website tasks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Courses area start --> */}
        <div className="courses-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Our featured courses</h2>
                        </div>
                    </div>
                </div>
                <div className="courses-actives">
                    {/* <!-- Single --> */}
                    <div className="properties pb-20">
                        <div className="properties__card">
                            <div className="properties__img overlay1">
                                <a href="#"><img src="assets/img/gallery/featured1.png" alt=""/></a>
                            </div>
                            <div className="properties__caption">
                                <p>User Experience</p>
                                <h3><a href="#">Fundamental of UX htmlFor Application design</a></h3>
                                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.

                                </p>
                                <div className="properties__footer d-flex justify-content-between align-items-center">
                                    <div className="restaurant-name">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half"></i>
                                        </div>
                                        <p><span>(4.5)</span> based on 120</p>
                                    </div>
                                    <div className="price">
                                        <span>$135</span>
                                    </div>
                                </div>
                                <a href="#" className="border-btn border-btn2">Find out more</a>
                            </div>

                        </div>
                    </div>
                    {/* <!-- Single --> */}
                    {/* <!-- Single --> */}
                    <div className="properties pb-20">
                        <div className="properties__card">
                            <div className="properties__img overlay1">
                                <a href="#"><img src="assets/img/gallery/featured2.png" alt=""/></a>
                            </div>
                            <div className="properties__caption">
                                <p>User Experience</p>
                                <h3><a href="#">Fundamental of UX htmlFor Application design</a></h3>
                                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
                                </p>
                                <div className="properties__footer d-flex justify-content-between align-items-center">
                                    <div className="restaurant-name">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half"></i>
                                        </div>
                                        <p><span>(4.5)</span> based on 120</p>
                                    </div>
                                    <div className="price">
                                        <span>$135</span>
                                    </div>
                                </div>
                                <a href="#" className="border-btn border-btn2">Find out more</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single --> */}
                    {/* <!-- Single -->/ */}
                    <div className="properties pb-20">
                        <div className="properties__card">
                            <div className="properties__img overlay1">
                                <a href="#"><img src="assets/img/gallery/featured3.png" alt=""/></a>
                            </div>
                            <div className="properties__caption">
                                <p>User Experience</p>
                                <h3><a href="#">Fundamental of UX htmlFor Application design</a></h3>
                                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.

                                </p>
                                <div className="properties__footer d-flex justify-content-between align-items-center">
                                    <div className="restaurant-name">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half"></i>
                                        </div>
                                        <p><span>(4.5)</span> based on 120</p>
                                    </div>
                                    <div className="price">
                                        <span>$135</span>
                                    </div>
                                </div>
                                <a href="#" className="border-btn border-btn2">Find out more</a>
                            </div>

                        </div>
                    </div>
                    {/* <!-- Single --> */}
                    {/* <!-- Single -->/ */}
                    <div className="properties pb-20">
                        <div className="properties__card">
                            <div className="properties__img overlay1">
                                <a href="#"><img src="assets/img/gallery/featured2.png" alt=""/></a>
                            </div>
                            <div className="properties__caption">
                                <p>User Experience</p>
                                <h3><a href="#">Fundamental of UX htmlFor Application design</a></h3>
                                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.

                                </p>
                                <div className="properties__footer d-flex justify-content-between align-items-center">
                                    <div className="restaurant-name">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half"></i>
                                        </div>
                                        <p><span>(4.5)</span> based on 120</p>
                                    </div>
                                    <div className="price">
                                        <span>$135</span>
                                    </div>
                                </div>
                                <a href="#" className="border-btn border-btn2">Find out more</a>
                            </div>

                        </div>
                    </div>
                    {/* <!-- Single --> */}
                </div>
            </div>
        </div>
        {/* <!-- Courses area End --> */}
        {/* <!--? About Area-1 Start --> */}
        <section className="about-area1 fix pt-10">
            <div className="support-wrapper align-items-center">
                <div className="left-content1">
                    <div className="about-icon">
                        <img src="assets/img/icon/about.svg" alt=""/>
                    </div>
                    {/* <!-- section tittle --> */}
                    <div className="section-tittle section-tittle2 mb-55">
                        <div className="front-text">
                            <h2 className="">Learn new skills online with top educators</h2>
                            <p>The automated process all your website tasks. Discover tools and 
                                techniques to engage effectively with vulnerable children and young 
                            people.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <p>Techniques to engage effectively with vulnerable children and young people.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <p>Join millions of people from around the world  learning together.</p>
                        </div>
                    </div>

                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <p>Join millions of people from around the world learning together. Online learning is as easy and natural.</p>
                        </div>
                    </div>
                </div>
                <div className="right-content1">
                    {/* <!-- img --> */}
                    <div className="right-img">
                        <img src="assets/img/gallery/about.png" alt=""/>

                        <div className="video-icon" >
                            <a classNameNameName="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i class="fas fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Area End --> */}
        {/* <!--? top subjects Area Start --> */}
        <div className="topic-area section-padding40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Explore top subjects</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic1.png" alt=""/>
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic2.png" alt=""/>
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic3.png" alt=""/>
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic4.png" alt=""/>
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic5.png" alt=""/>
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic6.png" alt=""/>
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic7.png" alt=""/>
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic8.png" alt=""/>
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mt-20">
                            <a href="courses.html" className="border-btn">View More Subjects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- top subjects End --> */}
        {/* <!--? About Area-3 Start -->/ */}
        <section className="about-area3 fix">
            <div className="support-wrapper align-items-center">
                <div className="right-content3">
                    {/* <!-- img -->/ */}
                    <div className="right-img">
                        <img src="assets/img/gallery/about3.png" alt=""/>
                    </div>
                </div>
                <div className="left-content3">
                    {/* <!-- section tittle --> */}
                    <div className="section-tittle section-tittle2 mb-20">
                        <div className="front-text">
                            <h2 className="">Learner outcomes on courses you will take</h2>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <p>Techniques to engage effectively with vulnerable children and young people.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <p>Join millions of people from around the world
                            learning together.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt=""/>
                        </div>
                        <div className="features-caption">
                            <p>Join millions of people from around the world learning together.
                            Online learning is as easy and natural.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Area End --> */}
        {/* <!--? Team --> */}
        <section className="team-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Community experts</h2>
                        </div>
                    </div>
                </div>
                <div className="team-active">
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team1.png" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Mr. Urela</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team2.png" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Mr. Uttom</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team3.png" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Mr. Shakil</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team4.png" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Mr. Arafat</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team3.png" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Mr. saiful</a></h5>
                            <p>The automated process all your website tasks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Services End --> */}
        {/* <!--? About Area-2 Start --> */}
        <section className="about-area2 fix pb-padding">
            <div className="support-wrapper align-items-center">
                <div className="right-content2">
                    {/* <!-- img --> */}
                    <div className="right-img">
                        <img src="assets/img/gallery/about2.png" alt=""/>
                    </div>
                </div>
                <div className="left-content2">
                    {/* <!-- section tittle --> */}
                    <div className="section-tittle section-tittle2 mb-20">
                        <div className="front-text">
                            <h2 className="">Take the next step
                                toward your personal
                                and professional goals
                            with us.</h2>
                            <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                            <a href="#" className="btn">Join now htmlFor Free</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Area End --> */}
    </main>
    <footer>
     <div className="footer-wrappper footer-bg">
        {/* <!-- Footer Start--> */}
        <div className="footer-area footer-padding">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="single-footer-caption mb-30">
                                {/* <!-- logo --> */}
                                <div className="footer-logo mb-25">
                                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                                </div>
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p>The automated process starts as soon as your clothes go into the machine.</p>
                                    </div>
                                </div>
                                {/* <!-- social --> */}
                                <div className="footer-social">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Our solutions</h4>
                                <ul>
                                    <li><a href="#">Design & creatives</a></li>
                                    <li><a href="#">Telecommunication</a></li>
                                    <li><a href="#">Restaurant</a></li>
                                    <li><a href="#">Programing</a></li>
                                    <li><a href="#">Architecture</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Support</h4>
                                <ul>
                                    <li><a href="#">Design & creatives</a></li>
                                    <li><a href="#">Telecommunication</a></li>
                                    <li><a href="#">Restaurant</a></li>
                                    <li><a href="#">Programing</a></li>
                                    <li><a href="#">Architecture</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-footer-caption mb-50">
                            <div className="footer-tittle">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#">Design & creatives</a></li>
                                    <li><a href="#">Telecommunication</a></li>
                                    <li><a href="#">Restaurant</a></li>
                                    <li><a href="#">Programing</a></li>
                                    <li><a href="#">Architecture</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer-bottom area --> */}
        <div className="footer-bottom-area">
            <div className="container">
                <div className="footer-border">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-12 ">
                            <div className="footer-copy-right text-center">
                                <p>
                                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Footer End--> */}
      </div>
  </footer> 
  {/* <!-- Scroll Up --> */}
  <div id="back-top" >
    <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
</div>
    </>
  )
}

export default Dashboard