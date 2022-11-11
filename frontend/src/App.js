import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddToCart from "./components/addToCart/AddToCart";
import Logo from "./components/header/logo";
import Home from "./components/home/home";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [selected, setSelected] = useState(1);
  console.log("selected", selected);
  return (
    <div className="container">
      <Navbar selected={selected} setSelected={setSelected} />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Home />} />
          </Routes>
        </Router>
      </main>
      <AddToCart />
    </div>
  );
}

export default App;
