import React from 'react'
import "./style.css"

function Intro({heading,description}) {
  return (
    <div id="intro" className="intro-bg">
      <div className="intro-header">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Intro