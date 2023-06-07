import React, { useEffect, useState } from 'react';
// import { Button } from '@material-ui/core';
import AddIcon from "@mui/icons-material/Add";
import NoteList from './NoteList';
import bg from "../Img/notes-bg.jpg"
import { Toaster, toast } from 'react-hot-toast';
import { IconButton } from '@mui/material';

const GiveNote = () => {

    const [note, setNote] = useState({ inputTitle: "", inputText: "" });
    const [noteArr, setNoteArr] = useState([]);
    const [expand, setExpand] = useState(false);

    useEffect(()=>{
        localStorage.setItem('notifications', JSON.stringify(noteArr));
    },[noteArr])

    const fullExpand = () => {
        return (
            setExpand(true)
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
            return toast.error("Please Write Something")
        }
        else if (note.inputTitle === "") {
            return toast.error("Please Give Title Name")
        }
        else if (note.inputText === "") {
            return toast.error("Please Write Something in it. Its a Empty Note")
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
                    <NoteList key={index} id={index} theTitle={elem.inputTitle} theText={elem.inputText} delete={deleteNote} />
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
                            <span className="subheading text-dark">Give Notes</span>
                            <h1 className="mb-4 text-dark">In this section You can give notes to students for their better learning</h1>
                            {/* <p className="caps text-dark">Our Major Project will help our college students for their better learning and course understanding.</p> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* ---Hero-End---- */}

            {/* ------------------------*/}

            <section className="ftco-section">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center">
                        <span className="subheading"></span>
                        <h2 className="mb-1">Provide Important Notes To Students</h2>
                    </div>
                </div>
            </section>

            {/* ----------------------------- */}
            <section className='note_section'>
                <div className='main_note'>
                    <form className='formm'>
                        {expand ? (<input className='input' name="inputTitle" type="text" placeholder='Title' autoComplete='off' onChange={inputEvent} value={note.inputTitle} />) : <></>}
                        <textarea className='textarea' name="inputText" rows="" column="" placeholder='Write a Note...' onClick={fullExpand} onChange={inputEvent} value={note.inputText}></textarea>
                        {expand ? (<IconButton className='buttonn'>
                            <AddIcon onClick={addNote} className='plus-sign'></AddIcon>
                        </IconButton>) : <></>}
                    </form>
                </div>
                {notess()}
            </section>
            {/* ------------------------------ */}

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </>
    )
}

export default GiveNote