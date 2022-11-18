// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table.css";
import "./css/pizza_table_row.css";

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
      <caption>{title}</caption>
      <tbody>
        {data.map((item) => {
          return (
            <tr
              key={item.tid}
              onClick={(event) => handleToppingClick(event, item)}>
              <td
                className={`${
                  topping.findIndex((t) => t.name === item.name) !== -1
                    ? "crust_selected"
                    : ""
                }`}>
                <div>
                  <div className="crust_price">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                  <p className="crust_calories">{item.calories} Cal</p>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PizzaToppingTable;
