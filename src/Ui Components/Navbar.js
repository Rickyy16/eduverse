import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'bootstrap'

const Navbar = ({handleLogOut}) => {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        var myCollapse = document.getElementById('col-nav')
        var bsCollapse = new Collapse(myCollapse, {toggle: false})
        toggle ? bsCollapse.show() : bsCollapse.hide()
    })

  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/dashboard"><span>Edu</span>Verse</Link>
                    <button class="navbar-toggler" type="button" onClick={()=>{setToggle(!toggle)}}>
                        <span class="oi oi-menu"></span> Menu
                    </button>
                    <div class="collapse navbar-collapse" id="col-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Course</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Instructor</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Blog</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link">Contact</Link></li>
                            <li className="nav-item"><button className="nav-link" onClick={handleLogOut}>Log Out</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
    
    </>
  )
}

export default Navbar