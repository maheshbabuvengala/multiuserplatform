import React from "react";
import Login from "./Pages/Login_signup/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Login_signup/Signup.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
