// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table_row.css";

function PizzaTableRow({ data }) {
  return (
    <tbody className="pizza_tb_data">
      {data.map((e, index) => {
        return (
          <tr key={index}>
            <td>{e}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default PizzaTableRow;
