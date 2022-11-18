// AUTHOR: HARSHIT GAJJAR
import { useEffect, useState } from "react";
import "./css/pizza_table.css";
import "./css/pizza_table_row.css";

function PizzaSummaryTable({ allData, size, crust, toppings }) {
  const { title } = allData;
  const [basePrice, setBasePrice] = useState(0);
  const [totalCalories, setaTotalCalories] = useState(0);
  const [extras, setExtras] = useState(0);
  const [amt, setAmt] = useState(0);

  useEffect(() => {
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
    setAmt(basePr + extraPrice);
  });

  return (
    <table>
      <caption>{title}</caption>
      <tbody>
        <tr>
          <td>
            <div className="summary_row">
              <p>Base Price</p>
              <p>{basePrice}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="summary_row">
              <p>Extras</p>
              <p>{extras}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="summary_row">
              <p>Total Calories </p>
              <p>{totalCalories}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="summary_row">
              <p>Final Amount </p>
              <p>{amt}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PizzaSummaryTable;
