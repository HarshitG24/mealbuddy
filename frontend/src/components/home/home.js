import Promotion from "./promotion";
import Logo from "../header/logo";
import "../../Reused.css";
import "./css/home.css";
import Menu from "./Menu";
import { menu, pizzas } from "../../utils/util";
import { useState } from "react";
import "./css/product.css";

function Home() {
  const [selectedMenu, setMenu] = useState(0);
  return (
    <div className="content_block">
      <Logo />
      {/* Your content starts here */}
      <Promotion />

      <div className="menu_content">
        <p className="menu_title">Menu</p>
        <div className="menu_list">
          {menu.map((element, index) => {
            return (
              <Menu
                name={element.name}
                img={element.img}
                key={index}
                sel={selectedMenu === index}
                index={index}
                setMenu={setMenu}
              />
            );
          })}
        </div>

        <div className="product_container">
          <div className="product_card">
            <span class="css-sprite-pizza3"></span>
            <p className="product_name">Spicy Chicken Ranch</p>
            <p className="product_calories">400 cal</p>
            <p>$10.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
