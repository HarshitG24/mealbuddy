// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table.css";
import "./css/pizza_table_row.css";

function PizzaToppingTable({ allData, topping, setTopping }) {
  const { title, data } = allData;

  function handleToppingClick(e, item) {
    e.target.classList.toggle("crust_selected");
    let arr = topping.splice(0, topping.length);
    arr = arr.filter((elem) => elem.tid !== item.tid);

    if (e.target.classList.contains("crust_selected")) {
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
              <td>{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PizzaToppingTable;
