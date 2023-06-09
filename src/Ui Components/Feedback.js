import React from 'react'

const Feedback = () => {
  return (
    <>
    <div className="feedback">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close" />
          <div className="screen-header-button maximize" />
          <div className="screen-header-button minimize" />
        </div>
        
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +9462917035</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" />
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

    </>
  )
}

export default Feedback