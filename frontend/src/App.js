// AUTHOR: HARSHIT GAJJAR
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
import PizzaBuilder from "./components/pizza-builder/PizzaBuilder";
import BurgerBuilder from "./components/burger-builder/burger-builder";
import Wishlist from "./components/wishlist/wishlist";
import CalorieTracker from "./components/CalorieTracker/CalorieTracker";

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
          element={<Home setDef={setDefault} cart={cart} setCart={setCart} />}
        ></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route
          path="/createAccount"
          element={<CreateAccount setDef={setDefault} />}
        ></Route>
        <Route path="/login" element={<Login setDef={setDefault} />}></Route>

        <Route path="/pizza-builder" element={<PizzaBuilder />}></Route>
        <Route path="/burger-builder" element={<BurgerBuilder />}></Route>
        <Route path="/calorie-tracker" element={<CalorieTracker />}></Route>
      </Routes>

      {location.pathname.includes("/createAccount") ||
      location.pathname.includes("/login") ? null : (
        <div className="cart_block">
          <AddToCart cart={cart} setCart={setCart} />
        </div>
      )}
    </div>
  );
}

export default App;
