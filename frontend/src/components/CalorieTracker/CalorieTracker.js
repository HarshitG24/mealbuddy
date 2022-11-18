// AUTHOR: HARSHIT GAJJAR
import { PieChart } from "react-minimal-pie-chart";
import "./css/calorie-tracker.css";
import "../../Reused.css";
import Logo from "../header/logo";
import { useEffect, useState } from "react";
import { pieColors } from "../../utils/util";

function CalorieTracker() {
  const [categories, setCategories] = useState([]);
  const [tData, setData] = useState({});
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    let obj = {};

    async function fetch_data() {
      const allOrders = await fetch("/api/calorie/getAllOrders/john@gmail.com");
      const orderJson = await allOrders.json();

      orderJson.data[0].orders.forEach((elem) => {
        elem.cart.forEach((c) => {
          if (c.category in obj) {
            console.log("category is", c.category);
            obj = {
              ...obj,
              [c.category]: {
                ...[c.category],
                count: obj[c.category].count + c.qty,
                calories: obj[c.category].calories + c.calories * c.qty,
              },
            };
          } else {
            obj = {
              ...obj,
              [c.category]: {
                count: c.qty,
                calories: c.calories * c.qty,
              },
            };
          }
        });
      });

      let arr = Object.keys(obj);

      let pieDataArr = [];
      let totalCalories = 0;

      arr.forEach((e, index) => {
        totalCalories += obj[e].calories;
        pieDataArr.push({
          title: e,
          value: obj[e].calories,
          color: pieColors[index],
        });
      });

      pieDataArr = pieDataArr.map((p) => {
        return {
          ...p,
          value: Math.round((p.value / totalCalories) * 100),
        };
      });

      console.log(pieDataArr);
      setPieData(pieDataArr);
      setCategories(arr);
      setData(obj);
    }
    fetch_data();
  }, []);
  return (
    <div className="content_block">
      <Logo />
      <div className="pie_chart_container">
        <h1>Calorie Tracker</h1>
        <div className="pie_chart">
          <PieChart
            label={(props) => {
              return props.dataEntry.title + "-" + props.dataEntry.value + "%";
            }}
            data={pieData}
            labelStyle={() => {
              return { fontSize: "5px" };
            }}
          />
        </div>
      </div>
      <div className="calorie_table">
        <table>
          <tbody>
            <tr>
              <th className="table_header">Item</th>
              <th className="table_header">Quantity</th>
              <th className="table_header">Total Calories</th>
            </tr>

            {categories.map((t, index) => {
              return (
                <tr key={index}>
                  <td>{t}</td>
                  <td>{tData[t].count}</td>
                  <td>{tData[t].calories} calories</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CalorieTracker;
