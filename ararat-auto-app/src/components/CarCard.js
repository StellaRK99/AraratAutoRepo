import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import {getCars} from '../context/data'
import '../Public/styles/styles.css'

function CarCard() {
  
    const [carData, setCarData] = useState([])

    useEffect(async () => {
      getCars()
      .then(res => {
        setCarData(res)
    
      })
      .catch(error => {
        console.error(error)
      })
    }, [])
  
    return (
        <div className="card-container">
          {carData.map((content) => {
            return<div className="car-card">
            <h1>Vehicle: {content.title}</h1>
            <p>Specs: {content.description}</p>
            <p>Price: {content.price}</p>
            <p>Stock Number: {content.stock_num}</p>
            <Link to={`/individualcars:${content.id}`}>Details</Link>
            </div>
          })}
        </div>

    )
}

export default CarCard