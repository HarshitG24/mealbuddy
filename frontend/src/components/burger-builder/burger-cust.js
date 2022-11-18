import "./css/burger_table.css";
import "./css/burger_table_row.css";

export default function BurgerCustTable({ allData, topping, setTopping }) {
  const { title, data } = allData;

  function handleToppingClick(e, item) {
    e.target.classList.toggle("patty_selected");
    let arr = topping.splice(0, topping.length);
    arr = arr.filter((elem) => elem.tid !== item.tid);

    if (e.target.classList.contains("patty_selected")) {
      arr = [...arr, item];
    }
    console.log(arr);
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
              <td>{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
