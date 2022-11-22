// AUTHOR: HARSHIT GAJJAR
import Promotion from "./promotion";
import Logo from "../header/logo";
import "../../Reused.css";
import "./css/home.css";
import { useEffect, useState } from "react";
import "./css/product.css";
import Product from "./Product";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import Slider from "./Slider";
import CalorieSlider from "./CalorieSlider";
import Search from "./Search";
import Spinner from "../Spinner/Spinner";

function Home({ setCart, cart }) {
  const [productName, setProductName] = useState("pizza");
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(40);
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(24);
  const [minCalorie, setMinCalorie] = useState(100);
  const [maxCalorie, setMaxCalorie] = useState(400);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let obj = {};

        const resp = await fetch("/api/home/getAllData");
        const output = await resp.json();

        output.forEach((element) => {
          obj = {
            ...obj,
            [element.name]: element.data,
          };
        });

        setProduct(obj.pizza);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const indexLast = currentPage * dataPerPage;
  const indexFirst = indexLast - dataPerPage;
  let totalData = [...product];
  if (search !== "") {
    totalData = totalData.filter((n) =>
      n.name?.toLowerCase().includes(search?.toLowerCase())
    );
  }
  const currentData = totalData
    ?.slice(0, product.length)
    ?.filter(
      (f) =>
        f.price >= minPrice &&
        f.price <= maxPrice &&
        f.calories >= minCalorie &&
        f.calories <= maxCalorie
    );

  function homeUI() {
    return (
      <div>
        <Logo />
        <Promotion />

        <div className="menu_content">
          <p className="menu_title">Menu</p>
          <Search setSearch={setSearch} />
          <div>
            <div className="home_filter">
              <Slider
                minPrice={parseInt(minPrice)}
                maxPrice={parseInt(maxPrice)}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
              />
              <CalorieSlider
                minCalorie={parseInt(minCalorie)}
                maxCalorie={parseInt(maxCalorie)}
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
  return (
    <div className="content_block">{loading ? <Spinner /> : homeUI()}</div>
  );
}

Home.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Home;
