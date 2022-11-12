import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import CreateAccount from "./components/createAccount/createAccount";

function App() {
  const [selected, setSelected] = useState(1);

  return (
    // <div className="main_container">
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home selected={selected} setSelected={setSelected} />}
        ></Route>
        {/* <Route path="/settings" element={<Home />}></Route> */}
        <Route path="/createUser" element={<CreateAccount />}></Route>
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
