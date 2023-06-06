import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <section id="page_404">
        <div classname="container">
          <div classname="row">
            <div classname="col-sm-12 ">
              <div classname="col-sm-10 col-sm-offset-1  text-center">
                <div id="four_zero_four_bg">
                  <h1 classname="text-center ">404</h1>
                </div>
                <div id="content_box_404">
                  <h3 classname="h2">
                    Look like you're lost
                  </h3>
                  <p>the page you are looking for not avaible!</p>
                  <Link to="/" id="link_404">Go to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Error