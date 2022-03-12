import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import {getCarById} from '../context/data'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {deleteCar} from '../context/data';
import '../Public/styles/styles.css';

function IndividualCarCard() {
    const { id } = useParams()
    const [car, setCar] = useState([])  
  
    useEffect(async () => {
        getCarById(id)
        .then(res => {
            setCar(res)
           
        })
        .catch(error => {
            console.error(error)
        })
  
    }, [])
  
  
  
    return (
    <div className='individual-car-container'>
        <div className="individualCar-card">
          <h1>Vehicle: {car.title}</h1>
          <p>Specs: {car.description}</p>
          <p>Price: {car.price}</p>
          <p>Stock Number: {car.stock_num}</p>
          <button type='submit' onClick={event => {deleteCar(id)}}>Delete</button>
          </div>
          
          {/* <button type='submit' onClick={event => {editCar(user_id,title,description,price,stock_num)}}>Edit</button> */}
      </div>
    )
}

export default IndividualCarCard