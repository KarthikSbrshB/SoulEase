import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>AI Enhanced Personal Journal</h1>
        <p>Your personal space for reflection and growth</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default hero
