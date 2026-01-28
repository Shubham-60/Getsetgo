import React from 'react'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import AboutStory from '../components/AboutStory/AboutStory'
import Info from '../components/Info/Info'
import CoreValues from '../components/CoreValues/CoreValues'
import Team from '../components/Team/Team'

function about() {
  return (
    <div>
      <Header />
      <Intro heading={"About Us"} description={"Have a question or need assistance with planning your trip? We're here to help."} />
      <AboutStory />
      <Info
        img={["./images/person.svg", "./images/vfm.svg", "./images/trust.svg"]}
        head={["Handpicked Destinations", "Best Value for Money", "Personalized Recommendations"]}
        des={["Our advanced algorithm matches your travel preferences with destinations that you'll truly enjoy.",
          "We negotiate the best rates with our partners to ensure you get maximum value for your travel budget in rupees.",
          "Rely on our expert knowledge and carefully curated recommendations to plan your ideal getaway."
        ]}
        bg={"spcl"}
      />
      <CoreValues />
      <Team />
      <Footer />
    </div>
  )
}

export default about