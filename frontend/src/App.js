import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddToCart from "./components/addToCart/AddToCart";
import Logo from "./components/header/logo";
import Home from "./components/home/home";
import Navbar from "./components/navbar/Navbar";
import CreateAccount from "./components/createAccount/createAccount";

function App() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="container">
      <div className="nav_block">
        <Navbar selected={selected} setSelected={setSelected} />
      </div>
      <div className="content_block">
        <main>
          <Logo />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Home />} />
              <Route path="/settings" element={<Home />} />
            </Routes>
          </Router>
        </main>
      </div>
      <div className="cart_block">
        <AddToCart />
      </div>
    </div>
    // <CreateAccount></CreateAccount>
  );
}

export default App;
