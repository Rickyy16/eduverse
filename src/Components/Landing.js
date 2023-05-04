import React, { useEffect } from 'react'
import "../Css/Landing.css"
import studentImg from "../Img/studentimg.svg"
import teacherImg from "../Img/teacherimg.svg"
import { Link } from 'react-router-dom'
import Aos from 'aos'

const Landing = () => {

    useEffect(()=>{
        Aos.init();
    })
   
    
    return (
        <>
            <div className="mainDiv">
                <div className="container col-lg-9" data-aos="fade-down" data-aos-delay="">
                    <div className="row gy-5 d-flex justify-content-around">
                        <div className="col-xl-6 col-md-6 d-flex justify-content-center innerDiv" data-aos="zoom-in" data-aos-delay="200">
                            <Link to="/studentLogin">
                                <div className="items">
                                    <div className="img">
                                        <img src={studentImg} alt="" />
                                        <div className="text">
                                            <h3>Student</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-6 col-md-6 d-flex justify-content-center innerDiv" data-aos="zoom-in" data-aos-delay="200">
                            <Link to="/teacherlogin">
                                <div className="items">
                                    <div className="img">
                                        <img src={teacherImg} alt="" />
                                        <div className="text">
                                            <h3>Faculty</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;