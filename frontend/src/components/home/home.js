// AUTHOR: HARSHIT GAJJAR
import Promotion from "./promotion";
import Logo from "../header/logo";
import "../../Reused.css";
import "./css/home.css";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import "./css/product.css";
import Product from "./Product";
import PropTypes from "prop-types";

function Home({ setCart, cart }) {
  const [menu, setDataMenu] = useState([]);
  const [selectedMenu, setMenu] = useState(0);
  const [productName, setProductName] = useState("burger");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let obj = {};
      const resp1 = await fetch("/api/home/getCategories");
      const output1 = await resp1.json();
      setDataMenu(output1);

      const resp = await fetch("/api/home/getAllData");
      const output = await resp.json();

      output.forEach((element) => {
        obj = {
          ...obj,
          [element.name]: element.data,
        };
      });

      setProduct(obj);
    }

    fetchData();
  }, []);

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
                setProductName={setProductName}
              />
            );
          })}
        </div>

        <div className="product_container">
          {(product[productName] || []).map((elem, index) => {
            return (
              <Product
                elem={elem}
                setCart={setCart}
                cart={cart}
                key={index}
                productName={productName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Home;
