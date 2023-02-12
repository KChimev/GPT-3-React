import React from 'react'
import './feature.css'
function Feature(props) {
  const top = props.direction === 'row' ? '27%' : '19%'
  return (
    <div
      className="gpt3__feature-container"
      style={{ flexDirection: props.direction }}
    >
      <div className="gpt3__feature-title">
        <div className="gpt3__feature-border " style={{ top: top }}></div>
        <p style={{ fontSize: props.fs }} className="gpt3__feature-heading">
          {props.heading}
        </p>
      </div>
      <p style={{ fontSize: props.fsText }} className="gpt3__feature-text">
        {props.text}
      </p>
    </div>
  )
}

export default Feature
