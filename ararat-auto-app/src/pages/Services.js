import React, { useEffect } from 'react'
import ServiceList from '../components/ServiceList'
import '../Public/styles/styles.css'

function Services() {
  useEffect( () => {
    document.title ="Ararat Auto - Services"
  })
  return (
    <>
      <ServiceList />
    </>
  )
}

export default Services