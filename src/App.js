import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Signup from './Components/SignUpScreen';
import Home from './Components/LandingScreen';
import Login from './Components/LoginScreen';
import Profile from './Components/Profile';

function App() {
  return (
   
 <>
  <Router>
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/Signup" element={ <Signup/>}></Route>
      <Route path="/Login" element={ <Login/> }></Route>
      <Route path="/Profile" element={ <Profile/> }></Route>
    </Routes>
      
      </Router>
 

 
 </>
  );
}

export default App;
