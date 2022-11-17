// AUTHOR: HARSHIT GAJJAR
import { PieChart } from "react-minimal-pie-chart";
import "./css/calorie-tracker.css";
import "../../Reused.css";
import Logo from "../header/logo";
import { useEffect } from "react";

function CalorieTracker() {
  useEffect(() => {
    async function fetch_data() {
      const allOrders = await fetch("/api/calorie/getAllOrders/john@gmail.com");
      const orderJson = await allOrders.json();

      console.log("orders", orderJson);
    }
    fetch_data();
  });
  return (
    <div className="content_block">
      <Logo />
      <div className="pie_chart_container">
        <h1>Calorie Tracker</h1>
        <div className="pie_chart">
          <PieChart
            label={(props) => {
              return props.dataEntry.value + "%";
            }}
            data={[
              { title: "Pizza", value: 30, color: "#E38627" },
              { title: "Burger", value: 10, color: "#C13C37" },
              { title: "Sandwich", value: 60, color: "#6A2135" },
              { title: "Soda", value: 0, color: "purple" },
            ]}
          />
        </div>
        ;
      </div>
    </div>
  );
}

export default CalorieTracker;
