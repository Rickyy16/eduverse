import React, { useEffect } from 'react'
import bg from "../Img/queans-bg.jpg"
import Hero from './Hero'
import { useNavigate } from 'react-router-dom'
import NoteList from './NoteList'

const Notifications = () => {
  const navigate = useNavigate("")

  const notifications = JSON.parse(localStorage.getItem('notifications'));

  const notess = () => {
    return (
      notifications.map((elem, index) => {
        return (
          <NoteList key={index} id={index} theTitle={elem.inputTitle} theText={elem.inputText} />
        )
      })
    )
  }

  return (
    <>
      {/* ---Hero---- */}

      <Hero bg={bg} suphead="Notifications" head="Get Updates and Notifications From your Teachers Here " />

      {/* ---Hero-End---- */}

      <section className="ftco-section">
        <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center">
            {/* <span className="subheading">Start Learning</span> */}
            <h2 className="mb-4">Notifications</h2>
          </div>
        </div>
        <div className='container' style={{ overflow: "scroll" }}>
          {notifications===null? <><h5 className='text-center'>Nothing to Show here</h5></>:notess()}
        </div>
      </section>

    </>
  )
}

export default Notifications