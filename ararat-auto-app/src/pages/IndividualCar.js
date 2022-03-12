import React, { useEffect } from 'react'
import IndividualCarCard from '../components/IndividualCarCard';


function IndividualCar() {
  useEffect( () => {
    document.title ="Ararat Auto - Individual Cars"
  })
  return (
    <>
    <h1>hi what up</h1>
      <IndividualCarCard />
    </>
  )
}

export default IndividualCar