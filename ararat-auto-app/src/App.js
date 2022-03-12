import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home.js';
import Services from './pages/Services.js';
import ForSale from './pages/ForSale.js';
import Contact from './pages/Contact.js';
import IndividualCar from './pages/IndividualCar.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element ={<Home />} />
        <Route path = "/Services" element ={<Services />} />
        <Route path = "/ForSale" element ={<ForSale />} />
        <Route path = "/Contact" element = {<Contact /> } />
        <Route path = "/individualcars:id" element = {<IndividualCar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </div>
  );
}

export default App;
