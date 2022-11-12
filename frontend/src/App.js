import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Settings from "./components/settings/Settings";

function App() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="main_container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home selected={selected} setSelected={setSelected} />}
          ></Route>
          <Route
            path="/settings"
            element={<Settings selected={selected} setSelected={setSelected} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
