import React from 'react'
import { ClimbingBoxLoader } from "react-spinners"
import { RotateLoader } from "react-spinners"
import "../Css/Loader.css"

const Loader = () => {
    return (
        <>
            <div id="loader">
                <RotateLoader
                size={30}
                color="#8b43d3" />
            </div>
        </>
    )
}

export default Loader;