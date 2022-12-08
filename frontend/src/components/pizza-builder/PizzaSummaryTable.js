// AUTHOR: HARSHIT GAJJAR
import { useEffect, useState } from "react";
import "./css/pizza_table.css";
import "./css/pizza_table_row.css";
import PropTypes from "prop-types";

function PizzaSummaryTable({
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
  // const [totalCalories, setaTotalCalories] = useState(0);
  // const [amt, setAmt] = useState(0);

  useEffect(() => {
    function updateHooks() {
      let multiplier = 1;

      switch (size) {
        case 0:
          multiplier = 1;
          break;

        case 1:
          multiplier = 1.5;
          break;

        case 2:
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

      let basePr = multiplier * crust.price;
      setBasePrice(basePr);
      setExtras(extraPrice);
      setaTotalCalories(extraCalories + multiplier * crust.calories);
      let price = (basePr + extraPrice).toFixed(2);
      setAmt(parseFloat(price));
    }

    updateHooks();
  });

  return (
    <table>
      <caption>{title}</caption>
      <tbody>
        <tr>
          <td>
            <div className="summary_row">
              <p className="crust_price">Base Price</p>
              <p className="summary_value">${basePrice.toFixed(2)}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="summary_row">
              <p className="crust_price">Extras</p>
              <p className="summary_value">${extras}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="summary_row">
              <p className="crust_price">Total Calories </p>
              <p className="summary_value">{totalCalories} Cal</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="summary_row">
              <p className="crust_price">Final Amount </p>
              <p className="summary_value">${amt}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

PizzaSummaryTable.propTypes = {
  allData: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  crust: PropTypes.object.isRequired,
  toppings: PropTypes.array.isRequired,
  totalCalories: PropTypes.number.isRequired,
  setaTotalCalories: PropTypes.func.isRequired,
  amt: PropTypes.number.isRequired,
  setAmt: PropTypes.func.isRequired,
};

export default PizzaSummaryTable;
