// AUTHOR: HARSHIT GAJJAR
import { PieChart } from "react-minimal-pie-chart";
import "./css/calorie-tracker.css";
import "../../Reused.css";
import Logo from "../header/logo";
import { useEffect, useState } from "react";
import { pieColors } from "../../utils/util";
import NotLoggedIn from "../NoLogIn/NotLoggedIn";

function CalorieTracker() {
  const [categories, setCategories] = useState([]);
  const [tData, setData] = useState({});
  const [pieData, setPieData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let obj = {};

    async function fetch_data() {
      const user_name = await fetch("/api/account/getUser");
      const user = await user_name.json();
      setUser(user);

      if ("user" in user) {
        const allOrders = await fetch("/api/calorie/getAllOrders/" + user.user);
        const orderJson = await allOrders.json();

        orderJson.data[0].orders.forEach((elem) => {
          elem.cart.forEach((c) => {
            if (c.category in obj) {
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
    }

    fetch_data();
  }, []);

  function calorieTrackerUI() {
    return (
      <div>
        <div className="pie_chart_container">
          <h1>Calorie Tracker</h1>
          <div className="pie_chart">
            <PieChart
              label={(props) => {
                return (
                  props.dataEntry.title + "-" + props.dataEntry.value + "%"
                );
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

  return (
    <div className="content_block">
      <Logo />
      {"user" in user ? calorieTrackerUI() : <NotLoggedIn />}
    </div>
  );
}

export default CalorieTracker;
