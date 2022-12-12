// AUTHOR: HARSHIT GAJJAR
import "./css/pizza_table_row.css";
import PropTypes from "prop-types";

function PizzaTableRow({ data, value, setValue, size, title }) {
  function updateCrustPrice(size) {
    let multiplier = 1;

    switch (size) {
      case 0:
        multiplier = 1;
        break;

      case 1:
        multiplier = 1.5;
        break;

      case 2:
        multiplier = 2;
        break;

      default:
        multiplier = 1;
        break;
    }

    return multiplier;
  }
  return (
    <tbody className="pizza_tb_data">
      <tr className="table_title">
        <td className="table_title_value">{title}</td>
      </tr>
      {data.map((e, index) => {
        return (
          <tr key={e.bid} onClick={() => setValue(e)}>
            <td
              className={
                index === value.bid ? "table_data crust_selected" : "table_data"
              }
            >
              <button className="topping_btn">
                <div className="crust_price">
                  <p>{e.name}</p>
                  <p>${(e.price * updateCrustPrice(size)).toFixed(2)}</p>
                </div>
                <p
                  className={
                    index === value.bid
                      ? "crust_calories selected_Color"
                      : "crust_calories"
                  }
                >
                  {e.calories} Cal
                </p>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

PizzaTableRow.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default PizzaTableRow;
