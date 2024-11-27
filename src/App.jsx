
import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Signup from "./components/Signup"
import LoginPage from "./components/LoginPage";


function App() {
  
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
