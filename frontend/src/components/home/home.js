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
import Pagination from "./Pagination";

function Home({ setCart, cart }) {
  // const [menu, setDataMenu] = useState([]);
  // const [selectedMenu, setMenu] = useState(0);
  const [productName, setProductName] = useState("pizza");
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(20);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let obj = {};
      // const resp1 = await fetch("/api/home/getCategories");
      // const output1 = await resp1.json();
      // setDataMenu(output1);

      const resp = await fetch("/api/home/getAllData");
      const output = await resp.json();

      output.forEach((element) => {
        obj = {
          ...obj,
          [element.name]: element.data,
        };
      });

      console.log("obj is", obj);
      setProduct(obj.pizza);
    }

    fetchData();
  }, []);

  const indexLast = currentPage * dataPerPage;
  const indexFirst = indexLast - dataPerPage;
  const currentData = product?.slice(indexFirst, indexLast);
  console.log(currentData);
  return (
    <div className="content_block">
      <Logo />
      {/* Your content starts here */}
      <Promotion />

      <div className="menu_content">
        <p className="menu_title">Menu</p>
        {/* <div className="menu_list">
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
        </div> */}

        <div className="product_container">
          {(currentData || []).map((elem, index) => {
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
        <Pagination
          currentData={product.length}
          dataPerPage={dataPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

Home.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Home;
