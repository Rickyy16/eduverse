import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({newCallBack,bg,suphead,head,subhead,activePage}) => {
    const phone = localStorage.getItem("phone")
  return (
    <>
    <div className="hero-wrap js-fullheight d-flex align-items-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
            <div className="col-md-7">
              <span className="subheading text-dark">{suphead}</span>
              <h1 className="mb-4 text-dark">{head}</h1>
              <p className="caps text-dark">{subhead}</p>
              {activePage==="" && <p className="mb-0 ">{!phone?<Link onClick={()=>{newCallBack("notes")}} className="btn btn-primary">Take Notes</Link>:<Link onClick={()=>{newCallBack("givenote")}} className="btn btn-primary">Give Notes</Link>} <Link onClick={()=>{newCallBack("feedback")}} className="btn btn-white">Contact Us</Link></p>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero