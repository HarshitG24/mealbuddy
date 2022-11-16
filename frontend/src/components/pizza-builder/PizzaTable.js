// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table.css";
import PizzaTableRow from "./PizzaTableRow";

function PizzaTable({ allData, value, setValue }) {
  const { title, data } = allData;
  return (
    <table>
      <caption>{title}</caption>
      <PizzaTableRow data={data} value={value} setValue={setValue} />
    </table>
  );
}

export default PizzaTable;
