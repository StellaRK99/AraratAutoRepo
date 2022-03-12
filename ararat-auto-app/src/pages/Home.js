import React, { useEffect } from 'react'
import Banner from '../components/Banner'

function Home() {
  useEffect( () => {
    document.title ="Ararat Auto - Home"
  })
  return (
    <>
      <Banner />
    </>
  )
}

export default Home