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
import Slider from "./Slider";
import CalorieSlider from "./CalorieSlider";

function Home({ setCart, cart }) {
  // const [menu, setDataMenu] = useState([]);
  // const [selectedMenu, setMenu] = useState(0);
  const [productName, setProductName] = useState("pizza");
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(40);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(24);
  const [minCalorie, setMinCalorie] = useState(100);
  const [maxCalorie, setMaxCalorie] = useState(400);

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
  const totalData = [...product];
  console.log("total", totalData.length);
  const currentData = totalData
    ?.slice(0, product.length)
    ?.filter(
      (f) =>
        f.price >= minPrice &&
        f.price <= maxPrice &&
        f.calories >= minCalorie &&
        f.calories <= maxCalorie
    );
  // ?.slice(indexFirst, indexLast);
  console.log(currentData.length, currentPrice);
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
        <div>
          {/* <label htmlFor="volume">Volume</label>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="50"
            onChange={(e) => {
              setCurrentPrice(e.target.value);
            }}
          />
          <label>{currentPrice}</label> */}
          <div className="home_filter">
            <Slider
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
            <CalorieSlider
              minCalorie={minCalorie}
              maxCalorie={maxCalorie}
              setMinCalorie={setMinCalorie}
              setMaxCalorie={setMaxCalorie}
            />
          </div>
        </div>

        <div className="product_container">
          {(currentData || [])
            .slice(indexFirst, indexLast)
            .map((elem, index) => {
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
        {(currentData || []).length > 0 ? (
          <Pagination
            currentData={currentData.length}
            dataPerPage={dataPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : null}
      </div>
    </div>
  );
}

Home.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Home;
