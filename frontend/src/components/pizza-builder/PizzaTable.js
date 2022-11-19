// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table.css";
import PizzaTableRow from "./PizzaTableRow";
import PropTypes from "prop-types";

function PizzaTable({ allData, value, setValue }) {
  const { title, data } = allData;
  return (
    <table>
      <caption>{title}</caption>
      <PizzaTableRow data={data} value={value} setValue={setValue} />
    </table>
  );
}

PizzaTable.propTypes = {
  allData: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default PizzaTable;
