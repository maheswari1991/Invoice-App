import React from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { AnimationScroll as Scroll} from 'react-scroll';
// import FormuserDetails from './component/userForm/FormuserDetails';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Navbar from './component/Navbar/Navbar';
import Subscription from './component/Subscription/Subscription';
import Footer from './component/Footer/Footer';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
// import FullPageLoader from './component/FullPageLoader/FullPageLoader';

function App() {


return(
<div>
  <Navbar />
  <Home />
  <Contact /> 
  <Subscription />
  <About />
   <Footer />
  {/* <FullPageLoader /> */}

</div>
)

}
export default App;
