import "./css/burger_table.css";
import "./css/burger_table_row.css";
import PropTypes from "prop-types";

export default function BurgerCustTable({ allData, topping, setTopping }) {
  const { title, data } = allData;

  function handleToppingClick(e, item) {
    e.target.classList.toggle("patty_selected");
    let arr = topping.splice(0, topping.length);
    arr = arr.filter((elem) => elem.tid !== item.tid);

    if (e.target.classList.contains("patty_selected")) {
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
                    ? "patty_selected"
                    : ""
                }`}
              >
                <div>
                  <div className="burger_price">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                  <p className="burger_calories">{item.calories} Cal</p>
                </div>
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
