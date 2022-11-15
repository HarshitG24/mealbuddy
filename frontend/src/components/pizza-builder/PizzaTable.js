import "./css/pizza_table.css";
import PizzaTableRow from "./PizzaTableRow";

function PizzaTable({ allData }) {
  const { title, data } = allData;
  return (
    <table>
      <caption>{title}</caption>
      <PizzaTableRow data={data} />
    </table>
  );
}

export default PizzaTable;
