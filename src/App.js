import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
        </nav>
      </div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<ContactUs/>} />
      </Routes>
    </Router>
  );
};

export default App;