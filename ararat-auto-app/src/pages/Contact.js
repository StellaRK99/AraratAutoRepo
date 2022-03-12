import React, { useEffect } from 'react'
import Location from '../components/Location'
import '../Public/styles/styles.css'

function Contact() {
  useEffect( () => {
    document.title ="Ararat Auto - Contact"
  })
  return (
    <>
      <Location />
    </>
  )
}

export default Contact