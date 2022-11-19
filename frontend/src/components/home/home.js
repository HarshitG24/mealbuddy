// AUTHOR: HARSHIT GAJJAR
import Promotion from "./promotion";
import Logo from "../header/logo";
import "../../Reused.css";
import "./css/home.css";
import Menu from "./Menu";
import { menu, pizzas } from "../../utils/util";
import { useEffect, useState } from "react";
import "./css/product.css";
import Product from "./Product";

function Home({ setCart, cart }) {
  const [selectedMenu, setMenu] = useState(0);
  const [product, setProduct] = useState(pizzas);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("/api/home/getAllData");
      const output = await resp.json();

      console.log(output.data);
    }

    fetchData();
  });
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
                setProduct={setProduct}
              />
            );
          })}
        </div>

        <div className="product_container">
          {product.map((elem, index) => {
            return (
              <Product elem={elem} setCart={setCart} cart={cart} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
