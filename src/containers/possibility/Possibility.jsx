import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className="gpt3__possibility-container" id="possibility">
      <img src={possibility} className="gpt3__possibility-img" />
      <div className="gpt3__possibility-info">
        <p>Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <img src={possibility} className="gpt3__possibility-img_mobile" />
        <p className="gpt3__possibility-info_paragraph">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility
