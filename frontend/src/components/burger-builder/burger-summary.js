import { useEffect, useState } from "react";
import "./css/burger_table.css";
import "./css/burger_table_row.css";
import PropTypes from "prop-types";

export default function BurgerSummaryTable({
  allData,
  size,
  crust,
  toppings,
  totalCalories,
  setaTotalCalories,
  amt,
  setAmt,
}) {
  const { title } = allData;
  const [basePrice, setBasePrice] = useState(0);
  const [extras, setExtras] = useState(0);

  useEffect(() => {
    let multiplier = 1;

    switch (size) {
      case 0:
        multiplier = 1;
        break;

      case 1:
        multiplier = 2;
        break;

      default:
        multiplier = 1;
        break;
    }

    let extraPrice = 0;
    let extraCalories = 0;

    toppings.forEach((t) => {
      extraPrice += t.price;
      extraCalories += t.calories;
    });
    let extras = extraPrice.toFixed(2);
    let basePr = multiplier * crust.price;
    setBasePrice(basePr);
    setExtras(extras);
    setaTotalCalories(extraCalories + multiplier * crust.calories);
    let price = (basePr + extraPrice).toFixed(2);
    setAmt(price);
  });

  return (
    <table>
      <tr className="table_title">
        <td className="table_title_value">{title}</td>
      </tr>
      <tbody>
        <tr>
          <td>
            <div className="burger_summary_row">
              <p className="burger_price">Base Price</p>
              <p className="burger_summary_value">${basePrice}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="burger_summary_row">
              <p className="burger_price">Extras</p>
              <p className="burger_summary_value">${extras}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="burger_summary_row">
              <p className="burger_price">Total Calories </p>
              <p className="burger_summary_value">{totalCalories} Cal</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="burger_summary_row">
              <p className="burger_price">Final Amount </p>
              <p className="burger_summary_value">${amt}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

BurgerSummaryTable.propTypes = {
  allData: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  crust: PropTypes.object.isRequired,
  toppings: PropTypes.array.isRequired,
  totalCalories: PropTypes.number.isRequired,
  setaTotalCalories: PropTypes.func.isRequired,
  amt: PropTypes.string.isRequired,
  setAmt: PropTypes.func.isRequired,
};
