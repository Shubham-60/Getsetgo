import React from 'react'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'

function about() {
  return (
    <div>
      <Header />
      <Intro heading={"About Us"} description={"Have a question or need assistance with planning your trip? We're here to help."}/>
    </div>
  )
}

export default about