import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from "../Img/logo-no-background.png"
import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs';
import { CiLocationArrow1, CiMail, CiPhone } from 'react-icons/ci';

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start text-white" style={{background: "linear-gradient(125deg, #207ce5 0%, #7d24d1 90%)"}}>
                {/* Grid container */}
                <div className="container p-4">
                    {/*Grid row*/}
                    <div className="row my-3">
                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <div className="d-flex align-items-center justify-content-center mb-4 mx-auto" >
                                <img src={footerLogo} height={70} alt loading="lazy" />
                            </div>
                            <ul className="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <Link className="text-white px-3" href="#!">
                                        <BsFacebook size={30} />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white px-3" href="#!">
                                        <BsInstagram size={30} />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white px-3" href="#!">
                                        <BsGithub size={30} />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white ps-3" href="#!">
                                        <BsYoutube size={30} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-6 mt-2 mb-4 mb-md-0">
                            <h5 className="fw-bold text-dark mb-4 ">Our Aim</h5>
                            <p className="text-center">We want to help our Polytechnic Students to learn and practice their course of study.</p>
                        </div>
                        {/*Grid column*/}

                        {/*Grid column*/}
                        <div className="col-lg-4 col-md-6 mt-2 mb-4 mb-md-0">
                            <h5 className="fw-bold text-dark mb-4">Contact</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p><CiLocationArrow1 size={25} className='me-2' />Jaipur , Rajasthan</p>
                                </li>
                                <li>
                                    <p><CiPhone size={25} className='me-2' />+91 01234 567 89</p>
                                </li>
                                <li>
                                    <p><CiMail size={25} className='me-2' />contact@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center text-light p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © Copyright : Crafted By <Link style={{ color: "#e9d9ff" }} to="/">Our Team</Link>
                </div>
                {/* Copyright */}
            </footer>
            {/* End of .container */}

        </>
    )
}

export default Footer