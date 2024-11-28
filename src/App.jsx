import { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";
import Description from "./components/Description/Description"
import Search from "./components/Search/Search"
import { DataProvider } from "./Context/dataContext"; // Make sure this is at the top level
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <DataProvider> {/* Wrapping the entire app with DataProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Home/:id" element={<Description />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/search" element={<Search />} />
          <Route path="/Profile" element={<Profile />}></Route>
          
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
