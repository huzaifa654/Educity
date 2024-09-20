import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

export default function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Title subTitle={"Our Programs"} title={"What We Offer"} />
      <Programs />
      <About />
      <Title subTitle={"Gallery"} title={"Campus Photos"} />
      <Campus />
      <Title subTitle={"TESTIMONIALS"} title={"What Students Says"} />
      <Testimonials />

    </div>
  )
}
