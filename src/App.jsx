import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import "./App.css";
import "./server";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/" className="site-logo">
            #VANLIFE
          </Link>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/vans/:id" element={<VanDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
