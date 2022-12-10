//AUTHOR: MIHIR MESIA
import "../../Reused.css";
import "./css/burger_builder.css";
import Logo from "../header/logo";
import PattySize from "./pattySize";
import { generateCart } from "../../utils/util";
import { useState, useEffect } from "react";
import BurgerTable from "./burger-table";
import BurgerCustTable from "./burger-cust";
import BurgerSummaryTable from "./burger-summary";
import BurgerToppings from "./burger-topping";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

export default function BurgerBuilder({ cart, setCart }) {
  const [allBurgerData, setAllBurgerData] = useState({});
  const [patty, setPatty] = useState({});
  const [size, setSize] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [totalCalories, setaTotalCalories] = useState(0);
  const [amt, setAmt] = useState(0);
  const [loading, setLoading] = useState(false);

  function addCustomBurger() {
    let arr = generateCart(cart, {
      pid: "MyBurger",
      name: "MyBurger",
      img: "",
      calories: totalCalories,
      price: amt,
      category: "burger",
      qty: 1,
    });

    setCart(arr);
  }
  useEffect(() => {
    async function getBurgerData() {
      setLoading(true);
      try {
        const resp = await fetch("/api/getBurgerData");
        const output = await resp.json();

        let obj = output[0];
        setPatty(obj.patty.data[0]);
        setAllBurgerData(output[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getBurgerData();
  }, []);

  function burgerBuilderUI() {
    return (
      <div>
        <header>
          <Logo />
        </header>
        <main>
          <div className="burger_builder_content">
            <h1 className="burger_builder_title">Burger Builder</h1>

            {/* SIZE - Inches */}
            {Object.keys(allBurgerData).length > 0 ? (
              <div className="burger_size">
                {allBurgerData.sizes.map((e, index) => {
                  return (
                    <PattySize
                      key={e.sid}
                      size={e.size}
                      selected={size}
                      setSize={setSize}
                      index={e.sid}
                    />
                  );
                })}
              </div>
            ) : null}

            <div className="burger_row">
              <div className="burger">
                <div className="BreadTop">
                  <div className="seeds2"></div>
                  <div className="seeds2"></div>
                </div>
                <BurgerToppings data={toppings}></BurgerToppings>
                {size == 1 ? (
                  <div className={patty.className}></div>
                ) : (
                  <div></div>
                )}
                <div className={patty.className}></div>
                <div className="BreadBottom"></div>
              </div>
              {/* Cutomizations */}
              {Object.keys(allBurgerData).length > 0 ? (
                <BurgerCustTable
                  allData={allBurgerData.topping}
                  topping={toppings}
                  setTopping={setToppings}
                />
              ) : null}
            </div>

            {/* Burger Patty + Total Price */}
            {Object.keys(allBurgerData).length > 0 ? (
              <div className="burger_row">
                <BurgerTable
                  allData={allBurgerData.patty}
                  value={patty}
                  setValue={setPatty}
                  size={size}
                />

                <div className="burger_summary_block">
                  <BurgerSummaryTable
                    allData={allBurgerData.summary}
                    size={size}
                    crust={patty}
                    toppings={toppings}
                    totalCalories={totalCalories}
                    setaTotalCalories={setaTotalCalories}
                    amt={amt}
                    setAmt={setAmt}
                  />
                  <button onClick={() => addCustomBurger()}>Add to Cart</button>
                </div>
              </div>
            ) : null}
          </div>
        </main>
      </div>
    );
  }
  return (
    <div className="content_block">
      {loading ? <Spinner /> : burgerBuilderUI()}
    </div>
  );
}

BurgerBuilder.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
