import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import '../Public/styles/styles.css'


function Navbar() {
    
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
       
    }
    const closeMenu = () => {
        setToggle(false)
    }


  return (
    <div className="container">
        <div className="logo-container">
            <Link to="/"> 
                <h1>Ararat Auto</h1>
            </Link>   
        </div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/ForSale">For Sale</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
        
        <div className='mobile-nav'>
            <button onClick={handleToggle}>{toggle ? (
                <MdClose style={{ color: "red", width: "40px", height: "40px" }} />
                ) :(
                <FiMenu style={{ color: "red", width: "40px", height: "40px" }} />
            )}</button>
                <div className={`sideNav ${toggle ? " showMenu" : ""}`}>
                    <Link onClick={() => closeMenu()} to="/">Home</Link>
                    <Link onClick={() => closeMenu()} to="/Services">Services</Link>
                    <Link onClick={() => closeMenu()} to="/ForSale">For Sale</Link>
                    <Link onClick={() => closeMenu()} to="/Contact">Contact</Link>
                </div>
        </div>
    </div>
    )
}

export default Navbar