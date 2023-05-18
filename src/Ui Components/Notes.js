import React, { useState } from 'react';
// import { Button } from '@material-ui/core';
import AddIcon from "@mui/icons-material/Add";
import Notesn from './Notesn';
import bg from "../Img/notes-bg.jpg"

const Notes = () => {

  const [note, setNote] = useState({ inputTitle: "", inputText: "" });
  const [noteArr, setNoteArr] = useState([]);

  const [expand ,setExpand] = useState(false);


  const fullExpand = ()=>{
      return(
          setExpand(!expand)
      )
  }

  const inputEvent = (event) => {
      // const name = event.target.name;
      // const value = event.target.value;

      const { name, value } = event.target;

      return (
          setNote((preval) => {
              return {
                  ...preval,
                  [name]: value
              }
          })
      )
  }

  const addNote = () => {

      if (note.inputTitle === "" && note.inputText === "") {
          return alert("please Write Something")
      }
      else if (note.inputTitle === "") {
          return alert("please Give Title Name")
      }
      else if (note.inputText === "") {
          return alert("please Write Something in it. Its a Empty Note")
      }
      else {
          return (
              setNoteArr((prev) => {
                  return [
                      ...prev, note
                  ]
              }),
              setNote({ inputTitle: "", inputText: "" })

          )
      }
  }

  const deleteNote = (id) => {

      return (
          setNoteArr((prev) => {
              return (
                  prev.filter((elem, index) => {
                      return index !== id
                  })
              )
          })

      )
  }

  const notess = () => {
      return (
          noteArr.map((elem, index) => {
              return (
                  <Notesn key={index} id={index} theTitle={elem.inputTitle} theText={elem.inputText} delete={deleteNote} />
              )
          })
      )
  }

  return (
    <>
      {/* ---Hero---- */}

      <div className="hero-wrap js-fullheight d-flex align-items-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
            <div className="col-md-7">
              <span className="subheading text-dark">Notes</span>
              <h1 className="mb-4 text-dark">Take Specialised Notes To Make Your Learning Better</h1>
              {/* <p className="caps text-dark">Our Major Project will help our college students for their better learning and course understanding.</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* ---Hero-End---- */}

      {/* ------------------------*/}

      <div className='main_note'>
        <form>
          {expand ? (<input name="inputTitle" type="text" placeholder='Title' autoComplete='off' onChange={inputEvent} value={note.inputTitle} />) : <></>}
          <textarea name="inputText" rows="" column="" placeholder='Write a Note...' onClick={fullExpand} onChange={inputEvent} value={note.inputText}></textarea>
          {expand ? (<button onClick={addNote}>
            <AddIcon className='plus-sign'></AddIcon>
          </button>) : <></>}
        </form>
      </div>
      {notess()}
      {/* ------------------------ */}

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

    </>
  )
}

export default Notes