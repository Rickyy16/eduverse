import React from 'react';
import bg from "../Img/notes-bg.jpg"
import Hero from './Hero';
import { useNavigate } from 'react-router-dom'

const Notes = () => {
  const navigate = useNavigate("")

  return (
    <>
      {/* ---Hero---- */}

      <Hero bg={bg} suphead="Notes" head="Take Specialised Notes To Make Your Learning Better "   />

      {/* ---Hero-End---- */}

      <section className="ftco-section">
        <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Start Learning</span>
            <h2 className="mb-4">Browse By Semester</h2>
          </div>
        </div>
        <div className="container containerr row">
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester1") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="python">1st Semester</h2>
                <p className="python">4 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>01</h2>
            </div>
          </div>

          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester2") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="java">2nd Semester</h2>
                <p className="java">6 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>02</h2>
            </div>
          </div>
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester3") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="cSharp">3rd Semester</h2>
                <p className="cSharp">5 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>03</h2>
            </div>
          </div>
        </div>

        <div className="container containerr-2 row">
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester4") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="python">4th Semester</h2>
                <p className="python">6 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>04</h2>
            </div>
          </div>
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester5") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="cSharp">5th Semester</h2>
                <p className="cSharp">5 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>05</h2>
            </div>
          </div>
          <div className="card col-lg-3 col-md-5 col-sm-8" onClick={() => { navigate("/semester6") }}>
            <div className="face face1">
              <div className="content">
                <span className="stars" />
                <h2 className="java">6th Semester</h2>
                <p className="java">4 Subjects</p>
              </div>
            </div>
            <div className="face face2">
              <h2>06</h2>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Notes