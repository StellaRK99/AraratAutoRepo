import React from 'react'
//import background from '../Public/Images/nissan-240z-g4940f71d5_1920.jpg'
import background from '../Public/Images/car-gfa99d119d_1920.jpg'
import '../Public/styles/styles.css'


function Banner() {
  return (
    <div className='background-img-container'>
      <figure>
        <img src ={background}></img>
      </figure>
      
    <div className="slogan-container">
        <div className="slogan">
          <h1>Great Service, Great Prices & Quality Repair</h1>
          <h2>Open Monday through Friday</h2>	
          <a href="tel:778-858-3336">Click to Call 778-858-3336</a>
        </div>
      </div>
    </div>
  )
}

export default Banner