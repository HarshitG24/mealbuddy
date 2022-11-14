import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./Reused.css";
import Home from "./components/home/home";
import Settings from "./components/settings/Settings";
import Navbar from "./components/navbar/Navbar";
import AddToCart from "./components/addToCart/AddToCart";
import CreateAccount from "./components/createAccount/createAccount";
import Login from "./components/login/login";

function App() {
  const [selected, setSelected] = useState(1);
  const [showDefault, setDefault] = useState(true);
  const [cart, setCart] = useState([]);
  const location = useLocation();

  return (
    <div className="main_container">
      {location.pathname.includes("/createAccount") ||
      location.pathname.includes("/login") ? null : (
        <div className="nav_block">
          <Navbar
            selected={selected}
            setSelected={setSelected}
            def={showDefault}
            setDef={setDefault}
          />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home setDef={setDefault} cart={cart} setCart={setCart} />
          }></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route
          path="/createAccount"
          element={<CreateAccount setDef={setDefault} />}></Route>
        <Route path="/login" element={<Login setDef={setDefault} />}></Route>
      </Routes>

      {location.pathname.includes("/createAccount") ||
      location.pathname.includes("/login") ? null : (
        <div className="cart_block">
          <AddToCart cart={cart} />
        </div>
      )}
    </div>
  );
}

export default App;
