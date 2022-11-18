//AUTHOR: MIHIR MESIA

import "./css/burger_table_row.css";

export default function BurgerTableRow({ data, value, setValue }) {
  return (
    <tbody className="burger_tb_data">
      {data.map((e, index) => {
        return (
          <tr key={e.bid} onClick={() => setValue(e)}>
            <td className={index === value.bid ? "patty_selected" : ""}>
              {e.name}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
