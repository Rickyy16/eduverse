import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Notesn = (props) => {
  return (
    <>
    <div className='note'>
        <h1>{props.theTitle}</h1>
        <br />
        <p>{props.theText}</p>
        <button class="btn" onClick={()=>{
            return(
                props.delete(props.id)
            )
        }}>
            <DeleteIcon class="deleteIcon">

            </DeleteIcon>
        </button>
    </div>
</>
  )
}

export default Notesn