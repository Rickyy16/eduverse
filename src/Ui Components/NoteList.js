import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const NoteList = (props) => {
    const phone = localStorage.getItem("phone")
    return (
        <>
            <div className='note'>
                <h1>{props.theTitle}</h1>
                <br />
                <p>{props.theText}</p>
                {phone && <IconButton class="btn" color="error">
                    <DeleteIcon onClick={() => {
                        return (
                            props.delete(props.id)
                        )
                    }} />
                </IconButton>}
            </div>
        </>
    )
}

export default NoteList