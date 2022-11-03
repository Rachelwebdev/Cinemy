import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login count={count} setCount={setCount} />}
        />
        <Route path="/about" element={<About />}>
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
