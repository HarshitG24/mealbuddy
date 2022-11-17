// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table_row.css";

function PizzaTableRow({ data, value, setValue }) {
  return (
    <tbody className="pizza_tb_data">
      {data.map((e, index) => {
        return (
          <tr key={e.bid} onClick={() => setValue(e)}>
            <td className={index === value.bid ? "crust_selected" : ""}>
              {e.name}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default PizzaTableRow;
