import React from 'react'
import locationMap from '../Public/Images/location-map.png'
import selfPortrait from '../Public/Images/IMG_1557.jpg'
import '../Public/styles/styles.css'


function Location() {
  return (
    <div className='location-container'>
        <div className="map-card">
          <h1>Visit Our Shop</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10428.596576832782!2d-122.9900769!3d49.1977302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x734509f70fc9315f!2sArarat%20Auto%20Ltd!5e0!3m2!1sen!2sca!4v1646627642177!5m2!1sen!2sca" 
          width="500" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"/>
          <a href="https://www.google.com/search?q=ararat+auto&sxsrf=APq-WBsuKYlOUndiP7ohLHxlsqujDGVPMg%3A1646182923234&source=hp&ei=C8IeYoKdC7--0PEPyd-XkAk&iflsig=AHkkrS4AAAAAYh7QG0FBZpGMamHfdM7lPc51Y2zXwnSf&gs_ssp=eJzj4tVP1zc0TDItzzYzy0g3YLRSNagwNbEwMzczTDJMSzFItTCztDKoMDc2MTWwTDM3SEu2NDY0TfPiTiwCwhKFxNKSfABeXxLO&oq=ararat&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzIKCC4QxwEQrwEQJzIECCMQJzILCC4QgAQQsQMQ1AIyBQguEIAEMgsILhCABBCxAxDUAjILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIFCAAQgAQ6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARCjAjoICAAQgAQQsQM6CwguEIAEELEDEIMBOggILhCABBCxAzoICC4QgAQQ1AJQAFigBmD3E2gAcAB4AYABtQWIAYkSkgELMC4xLjEuMS4yLjGYAQCgAQE&sclient=gws-wiz">101-5113 Byrne Rd, Burnaby BC V5J 3H6</a>
          <h2>Hours of Operation</h2>
          <p>Monday- Friday, 9:00am - 6:00pm.</p>
        </div>
        
        <div className="contact-card">
          <h1>Contact Us</h1>
          <figure>
            <img src={selfPortrait}></img>
          </figure>
          <article>
            <h2>Hi! I'm Artyom...</h2>
            <p>I'm a local small business owner that immigrated to Canada in the early 2000's. I've been serving my community for over 10 years, and have been fixing cars since I was 16 years old back home in Armenia.
              Come visit us at Ararat Auto for all of your car needs. Contact us at (778)-858-3336. I'll be at your service!
            </p>
          </article>

        </div>


    </div>
  )
}

export default Location