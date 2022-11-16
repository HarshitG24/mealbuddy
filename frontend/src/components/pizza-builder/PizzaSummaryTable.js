// AUTHOR: HARSHIT GAJJAR
import { useEffect, useState } from "react";
import "./css/pizza_table.css";
import "./css/pizza_table_row.css";

function PizzaSummaryTable({ allData, size, crust, toppings }) {
  console.log("the size is", size);
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

    setBasePrice(multiplier * crust.price);
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

export default PizzaSummaryTable;
