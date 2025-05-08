import React from 'react'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'

function contact() {
  return (
    <div>
      <Header />
      <Intro heading={"Contact Us"} description={"We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out."}/>
    </div>
  )
}

export default contact