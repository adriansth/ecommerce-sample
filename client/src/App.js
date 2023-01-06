import React from 'react';
// styles
import './App.css';
// react router 
import { Routes, Route } from 'react-router-dom';
// components 
import Navbar from './components/global/Navbar';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {
     return(
          <div className='App'>
               <Navbar />
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
               </Routes>
          </div>
     );
}

export default App;