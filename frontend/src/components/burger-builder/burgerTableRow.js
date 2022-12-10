//AUTHOR: MIHIR MESIA

import "./css/burger_table_row.css";
import PropTypes from "prop-types";

export default function BurgerTableRow({ data, value, setValue, size }) {
  return (
    <tbody className="burger_tb_data">
      {data.map((e, index) => {
        return (
          <tr key={e.bid} onClick={() => setValue(e)}>
            <td
              className={
                index === value.bid ? "patty_selected patty_data" : "patty_data"
              }
            >
              <button className="patty_button">
                <div className="burger_price">
                  <p>{e.name}</p>
                  <p>${e.price * (size + 1)}</p>
                </div>

                <p className="burger_calories">{e.calories} Cal</p>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

BurgerTableRow.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};
