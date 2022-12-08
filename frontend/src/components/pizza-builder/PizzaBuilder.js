// AUTHOR: HARSHIT GAJJAR
import "../../Reused.css";
import "./css/pizza_builder.css";
import Logo from "../header/logo";
import PizzaSize from "./PizzaSize";
import { generateCart } from "../../utils/util";
import { useState, useEffect } from "react";
import PizzaTable from "./PizzaTable";
import pbase from "../../images/basep.png";
import crust1 from "../../images/crust1.png";
import crust2 from "../../images/crust2.png";
import crust3 from "../../images/crust3.png";
import PizzaToppingTable from "./PizzaToppingTable";
import PizzaSummaryTable from "./PizzaSummaryTable";
import onions from "../../images/onions.png";
import olives from "../../images/black-olives.png";
import mushroom from "../../images/mushrooms.png";
import pepper from "../../images/green-peppers.png";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

function PizzaBuilder({ cart, setCart }) {
  const [allPizzaData, setAllPizzaData] = useState({});
  const [size, setSize] = useState(0);
  const [crust, setCrust] = useState({});
  const [toppings, setToppings] = useState([]);
  const [totalCalories, setaTotalCalories] = useState(0);
  const [amt, setAmt] = useState(0.0);
  const [loading, setLoading] = useState(false);

  function getToppingImg(img) {
    switch (img) {
      case "onion":
        return onions;
      case "olive":
        return olives;
      case "mush":
        return mushroom;
      case "pep":
        return pepper;
      default:
        return onions;
    }
  }

  function addCustomPizza() {
    let arr = generateCart(cart, {
      pid: "customPizza",
      name: "CustomPizza",
      img: "",
      calories: totalCalories,
      price: amt,
      category: "pizza",
      qty: 1,
    });

    setCart(arr);
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const resp = await fetch("/api/pizza/getPizzaData");
        const output = await resp.json();
        let obj = output[0];
        setCrust(obj.crust.data[0]);
        setAllPizzaData(output[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getData();
  }, []);

  function PizzaBuilderUI() {
    return (
      <div>
        <Logo />
        <div className="pizza_builder_content">
          <h1 className="pizza_builder_title">Pizza Builder</h1>

          {/* SIZE - Inches */}
          <div className="pizza_size">
            {(allPizzaData?.sizes || []).map((e, index) => {
              return (
                <PizzaSize
                  key={e.sid}
                  size={e.size}
                  selected={size}
                  setSize={setSize}
                  index={e.sid}
                />
              );
            })}
          </div>

          <div className="pizza_row">
            {Object.keys(allPizzaData).length > 0 ? (
              <div className="pizza_img_parent">
                <img
                  className="image2"
                  src={pbase}
                  alt="This is the base of the pizza"
                />
                {(() => {
                  let crust_name = crust1;
                  if (Object.keys(crust).length > 0) {
                    if (crust.bid === 1) {
                      crust_name = crust2;
                    } else if (crust.bid === 2) {
                      crust_name = crust3;
                    }
                  }

                  return (
                    <img
                      className="image1"
                      src={crust_name}
                      alt="This is the base of the pizza"
                    />
                  );
                })()}

                {toppings.map((t, index) => {
                  return (
                    <img
                      key={index}
                      className="pizza_toppings"
                      src={getToppingImg(t.url)}
                      alt="This is the base of the pizza"
                    />
                  );
                })}
              </div>
            ) : null}

            {/* Toppings */}
            {Object.keys(allPizzaData).length > 0 ? (
              <PizzaToppingTable
                allData={allPizzaData.topping}
                topping={toppings}
                setTopping={setToppings}
              />
            ) : null}
          </div>

          {/* Pizza Crust + Total Price */}
          {Object.keys(allPizzaData).length > 0 ? (
            <div className="pizza_row">
              <PizzaTable
                allData={allPizzaData.crust}
                value={crust}
                size={size}
                setValue={setCrust}
              />

              <div className="pizza_summary_block">
                <PizzaSummaryTable
                  allData={allPizzaData.summary}
                  size={size}
                  crust={crust}
                  toppings={toppings}
                  totalCalories={totalCalories}
                  setaTotalCalories={setaTotalCalories}
                  amt={amt}
                  setAmt={setAmt}
                />
                <button onClick={() => addCustomPizza()}>Add to Cart</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div className="content_block">
      {loading ? <Spinner /> : PizzaBuilderUI()}
    </div>
  );
}

PizzaBuilder.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default PizzaBuilder;
