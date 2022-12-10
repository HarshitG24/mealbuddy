import "./css/burger_table.css";
import "./css/burger_table_row.css";
import PropTypes from "prop-types";

export default function BurgerCustTable({ allData, topping, setTopping }) {
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
      <caption>{title}</caption>
      <tbody>
        {data.map((item) => {
          return (
            <tr
              key={item.tid}
              onClick={(event) => handleToppingClick(event, item)}
            >
              <td
                className={`${
                  topping.findIndex((t) => t.name === item.name) !== -1
                    ? "patty_selected patty_data"
                    : "patty_data"
                }`}
              >
                <button className="patty_button">
                  <div className="burger_price">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                  <p className="burger_calories">{item.calories} Cal</p>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

BurgerCustTable.propTypes = {
  allData: PropTypes.object.isRequired,
  topping: PropTypes.array.isRequired,
  setTopping: PropTypes.func.isRequired,
};
