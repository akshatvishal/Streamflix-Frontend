

import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup"


function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
