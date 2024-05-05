import React from 'react'
import Navbar from './Components/NavigBar/navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/programs'
import Title from './Components/Title/title'
import Testimonials from './Components/Testimonials/testimonials'
import Questionnaire from './Pages/Questionnaire/questionnaire'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'Features' title = 'What we offer'/>
        <Programs/>
        <Title subTitle = 'Testimonials' title = 'What Our Users Say'/>
        <Testimonials/>
        
      </div>
      
    </div>
  )
}

export default App
