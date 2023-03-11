import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import TopBar from './Component/Navbars/TopBar';
import Banner from './Component/Banner/Banner';
import Booking from './Component/Booking/Booking';
import Footer from './Component/Footer/Footer';
import Gallery from './Component/Gallery/Gallery';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Product from './Component/Product/Product';
import Service from './Component/Service/Service';
import Sign from './Component/Sign/Sign';
import ScrollToTop from 'react-scroll-to-top';
import Dashboard from './Component/Dashboard/Dashboard';
import { MdKeyboardArrowUp } from "react-icons/md";


function App() {
  return (
   <>
   <TopBar/>
   <Navbar/>
  
   <Routes>
     <Route path='/' element={<Banner />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/sign" element={<Sign />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
   </Routes>
   <ScrollToTop 
   style={{
    boxShadow: "none",
    backgroundColor: "#4f46e5",
    borderRadius: "50%",
    right: 50,
    zIndex: 20,
  }}
  component={
    <MdKeyboardArrowUp
      style={{ fontSize: "20px", margin: "0 auto", color: "#fff" }}
    />
  }
   smooth
   top={500} />
   <Footer/>
   </>
  );
}

export default App;
