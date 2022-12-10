// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table.css";
import "./css/pizza_table_row.css";
import PropTypes from "prop-types";

function PizzaToppingTable({ allData, topping, setTopping }) {
  const { title, data } = allData;

  function handleToppingClick(e, item) {
    let arr = topping.splice(0, topping.length);
    if (arr.findIndex((t) => t.name === item.name) !== -1) {
      arr = arr.filter((elem) => elem.tid !== item.tid);
    } else {
      arr = [...arr, item];
    }

    setTopping(arr);
  }
  return (
    <table>
      <tbody>
        <tr className="table_title">
          <td className="table_title_value">{title}</td>
        </tr>
        {data.map((item) => {
          return (
            // <button className="topping_btn">
            <tr
              onClick={(event) => handleToppingClick(event, item)}
              key={item.tid}>
              <td
                className={`table_data ${
                  topping.findIndex((t) => t.name === item.name) !== -1
                    ? "crust_selected"
                    : ""
                }`}>
                <button className="topping_btn">
                  <div className="crust_price">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                  <p className="crust_calories">{item.calories} Cal</p>
                </button>
              </td>
            </tr>
            // </button>
          );
        })}
      </tbody>
    </table>
  );
}

PizzaToppingTable.propTypes = {
  allData: PropTypes.object.isRequired,
  topping: PropTypes.array.isRequired,
  setTopping: PropTypes.func.isRequired,
};

export default PizzaToppingTable;
