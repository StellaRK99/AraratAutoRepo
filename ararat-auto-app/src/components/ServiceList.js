import React from 'react'
import oilChange from '../Public/Images/oil-g956f15894_640.jpg'
import fluidMaintenance from '../Public/Images/auto-repair-g9026013df_640.jpg'
import brakeServices from '../Public/Images/brake-disc-gae3d94c97_640.jpg'
import tireServices from '../Public/Images/winter-tires-g4558f432a_640.jpg'

function ServiceList() {
  return (
    <div className='service-container'>
        <div className="service-card">
          <figure>
            <img src={brakeServices}></img>
          </figure>
            <h1>Mechanical Services</h1>
            <ul>
                <li>Brakes and Rotors</li>
                <li>Exhaust Systems</li>
                <li>Fuel Systems</li>
                <li>Suspension</li>
            </ul>
        </div>
        <div className="service-card">
          <figure>
            <img src={fluidMaintenance}></img>
          </figure>
            <h1>Fluid Maintenance</h1>
            <ul>
                <li>Brake Fluid</li>
                <li>Coolant Fluid</li>
                <li>Power Steering Fluid</li>
                <li>Transmission Fluid</li>
            </ul>
        </div>
        <div className="service-card">
          <figure>
            <img src={oilChange}></img>
          </figure>
            <h1>Oil Changes</h1>
            <ul>
                <li>Basic</li>
                <li>Synthetic</li>
                <li>Premium Synthetic</li>
            </ul>
        </div>
        <div className="service-card">
          <figure>
            <img src={tireServices}></img>
          </figure>
            <h1>Tire Services</h1>
            <ul>
                <li>Alignment</li>
                <li>Mount and Balance</li>
                <li>Tire Rotation</li>
            </ul>
        </div>

    </div>
  )
}

export default ServiceList