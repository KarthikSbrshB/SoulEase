import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from "react-router-dom";


const navbar = () => {

  // const [sticky, setSticky] = useState(false);

  // useEffect(()=>
  // {
  //   window.addEventListener('scroll',()=>{
  //     window.scrollY > 100 ? setSticky(true) : setSticky(false);
  //   })
  // },[])

  return (
    // <nav className={`container 'dark-nav' : ''}`}>
    <nav className="container">
      
      <div className="logo"><h1>SoulEase</h1></div>
      <ul>
        <li><button className='btn' ><Link to="/">Home</Link></button></li>
        
        <li><button className='btn'><Link to="/journal">Write Journal</Link></button></li>
        
        <li><button className='btn'><Link to = "/questionnaire">Questionnaire</Link></button></li>
        {/* <li><a href="/questionnaire">Questionnaire</a></li> */}
      </ul>
    </nav>
  )
}

export default navbar
