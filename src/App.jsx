import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";

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
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
