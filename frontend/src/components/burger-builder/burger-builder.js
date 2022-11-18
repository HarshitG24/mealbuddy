//AUTHOR: MIHIR MESIA
import "../../Reused.css";
import "./css/burger_builder.css";
import Logo from "../header/logo";
import PattySize from "./pattySize";
import { burgerData, burgerSizes } from "../../utils/util";
import { useState } from "react";
import BurgerTable from "./burger-table";
// import pbase from "../../images/basep.png";
// import crust1 from "../../images/crust1.png";
// import crust2 from "../../images/crust2.png";
// import crust3 from "../../images/crust3.png";
import BurgerCustTable from "./burger-cust";
import BurgerSummaryTable from "./burger-summary";
// import onions from "../../images/onions.png";
// import olives from "../../images/black-olives.png";
// import mushroom from "../../images/mushrooms.png";
// import pepper from "../../images/green-peppers.png";
import BurgerToppings from "./burger-topping";

export default function BurgerBuilder() {
  const [size, setSize] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState({
    bid: 0,
    name: "Super Deluxe Beef",
    calories: 425,
    price: 8.99,
    className: "beef",
  });

  return (
    <div className="content_block">
      <Logo />
      <div className="burger_builder_content">
        <h1 className="burger_builder_title">Burger Builder</h1>

        {/* SIZE - Inches */}
        <div className="burger_size">
          {burgerSizes.map((e, index) => {
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

        <div className="burger_row">
          <div className="burger">
            <div className="BreadTop">
              <div className="seeds2"></div>
              <div className="seeds2"></div>
            </div>
            <BurgerToppings data={toppings}></BurgerToppings>
            <div className={crust.className}></div>
            <div className="BreadBottom"></div>
          </div>
          {/* Cutomizations */}
          <BurgerCustTable
            allData={burgerData[0]}
            topping={toppings}
            setTopping={setToppings}
          />
        </div>

        {/* Pizza Crust + Total Price */}
        <div className="burger_row">
          <BurgerTable
            allData={burgerData[1]}
            value={crust}
            setValue={setCrust}
          />

          <BurgerSummaryTable
            allData={burgerData[2]}
            size={size}
            crust={crust}
            toppings={toppings}
          />
        </div>
      </div>
    </div>
  );
}
