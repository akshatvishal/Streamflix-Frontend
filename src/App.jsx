import { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";
import Description from "./components/Description/Description";
import Mylist from './components/Mylist/Mylist'
import { DataProvider } from "./Context/dataContext";

function App() {
  return (
    <DataProvider> {/* Wrapping the entire app with DataProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Home/:id" element={<Description />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Home/List" element={<Mylist />}></Route>
          
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
