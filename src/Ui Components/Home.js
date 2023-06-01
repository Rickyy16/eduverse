import React from 'react'
import bg from "../Img/bg.png"
import Hero from './Hero'

const Home = ({newCallBack,activePage}) => {
  return (
    <>
      {/* ---Hero---- */}

      <Hero newCallBack={newCallBack} bg={bg} suphead="Welcome to EduVerse" head="Online Learning Platform for Khaitan Students " subhead="Our Major Project will help our college students for their better learning and course understanding." activePage={activePage}  />

      {/* ---Hero-End---- */}

      <section className="ftco-section">
        <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">Start Learning</span>
              <h2 className="mb-4">Browse By Semester</h2>
            </div>
          </div>
        <div className="container containerr row">
          <div className="card col-lg-3 col-md-5 col-sm-8">
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
          <div className="card col-lg-3 col-md-5 col-sm-8">
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
          <div className="card col-lg-3 col-md-5 col-sm-8">
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
          <div className="card col-lg-3 col-md-5 col-sm-8">
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
          <div className="card col-lg-3 col-md-5 col-sm-8">
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
          <div className="card col-lg-3 col-md-5 col-sm-8">
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

      {/* <section className="ftco-section ftco-about img">
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
      </section> */}

    </>
  )
}

export default Home