import React from 'react'
import {Link} from 'react-router-dom';
import '../Public/styles/styles.css'

function Footer() {
  return (
    <footer>
      {/* <h3>Quick Links</h3> */}
      <div className="links">
        <h2>Links</h2>
            <Link to="/">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/ForSale">For Sale</Link>
            <Link to="/Contact">Contact</Link>
      </div>
      <h2>&copy; AraratAuto Ltd (DN30433)</h2>
      
  </footer>
  )
}

export default Footer