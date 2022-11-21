//AUTHOR: MIHIR MESIA

import "./css/burger_table_row.css";
import PropTypes from "prop-types";

export default function BurgerTableRow({ data, value, setValue }) {
  return (
    <tbody className="burger_tb_data">
      {data.map((e, index) => {
        return (
          <tr key={e.bid} onClick={() => setValue(e)}>
            <td className={index === value.bid ? "patty_selected" : ""}>
              <div>
                <div className="burger_price">
                  <p>{e.name}</p>
                  <p>${e.price}</p>
                </div>
                <p className="burger_calories">{e.calories} Cal</p>
              </div>
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
};
