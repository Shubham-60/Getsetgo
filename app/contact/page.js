import React from 'react'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import "./style.css"
import MapSection from '../components/MapSection/MapSection'

function contact() {
  return (
    <div>
      <Header />
      <Intro heading={"Contact Us"} description={"Have a question or need assistance with planning your trip? We're here to help."} />
      <div className="contact-layout">
        <ContactForm />
        <ContactInfo />
      </div>
      <MapSection />
      <Footer />
    </div>
  )
}

export default contact