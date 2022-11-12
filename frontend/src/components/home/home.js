import Promotion from "./promotion";
import Navbar from "../navbar/Navbar";
import AddToCart from "../addToCart/AddToCart";
import Logo from "../header/logo";
import "../../Reused.css";
import "./css/home.css";
import Menu from "./Menu";
import { menu } from "../../utils/util";
import { useState } from "react";

function Home({ selected, setSelected }) {
  const [selectedMenu, setMenu] = useState(0);
  return (
    <div className="container">
      <div className="nav_block">
        <Navbar selected={selected} setSelected={setSelected} />
      </div>
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
        </div>
      </div>

      <div className="cart_block">
        <AddToCart />
      </div>
    </div>
  );
}

export default Home;
