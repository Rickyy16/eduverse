import React, { useEffect, useState } from 'react'
import "../Css/Landing.css"
import studentImg from "../Img/studentimg.svg"
import teacherImg from "../Img/teacherimg.svg"
import { Link } from 'react-router-dom'
import Aos from 'aos'
import Loader from '../Ui Components/Loader'

const Landing = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);

    useEffect(() => {
        Aos.init();
    })

    return (
        <>

            {loading ? <Loader /> :

                <>
                    <div className="mainDiv d-flex align-items-center justify-content-center">
                        <div className="container col-lg-9" data-aos="fade-down" data-aos-delay="">
                            <div className="row gy-5 d-flex justify-content-around">
                                <div className="col-xl-6 col-md-6 d-flex justify-content-center mt-1 mb-1  innerDiv" data-aos="zoom-in" data-aos-delay="200">
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

                                <div className="col-xl-6 col-md-6 d-flex justify-content-center mt-1 mb-1 innerDiv" data-aos="zoom-in" data-aos-delay="200">
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

            }

        </>
    )
}

export default Landing;