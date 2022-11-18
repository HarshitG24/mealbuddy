import { useEffect, useState } from "react";
import "./css/burger_table.css";
import "./css/burger_table_row.css";

export default function BurgerSummaryTable({ allData, size, crust, toppings }) {
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
          <td>Base Price {basePrice}</td>
        </tr>

        <tr>
          <td>Extras {extras}</td>
        </tr>

        <tr>
          <td>Total Calories {totalCalories}</td>
        </tr>

        <tr>
          <td>Final Amount {amt}</td>
        </tr>
      </tbody>
    </table>
  );
}
