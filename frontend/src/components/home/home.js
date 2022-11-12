import Promotion from "./promotion";
import Logo from "../header/logo";
import "../../Reused.css";
import "./css/home.css";
import Menu from "./Menu";
import { menu, pizzas } from "../../utils/util";
import { useState } from "react";
import "./css/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

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
            <div className="product_wishlist">
              <FontAwesomeIcon
                icon={faHeart}
                size="2x"
                className="product_heart"
                onClick={(e) => {}}
              />
            </div>
            <span className="css-sprite-pizza2"></span>
            <p className="product_name">Spicy Chicken Ranch</p>
            <p className="product_calories">400 cal</p>
            <div className="product_end">
              <p className="product_price">$10.99</p>
              <FontAwesomeIcon
                icon={faPlus}
                size="2x"
                className="product_add"
                onClick={(e) => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
