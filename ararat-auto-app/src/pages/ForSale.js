import React from 'react';
import { useEffect } from 'react';
import CarCard from '../components/CarCard';

function ForSale() {

  useEffect( () => {
    document.title ="Ararat Auto - For Sale"
  })

  return (
    <>
    <CarCard />
    </>
  )
}

export default ForSale