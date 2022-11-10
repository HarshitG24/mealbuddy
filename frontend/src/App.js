import "./App.css";
import Navbar from "./components/navbar/Navbar";

async function testApiCall() {
  const headers = new Headers({ "Content-Type": "application/json" });

  try {
    await fetch("/api/createUser", {
      method: "post",
      headers: headers,
      body: JSON.stringify({ name: "harshit" }),
    });
  } catch (error) {
    console.log("error is", error);
  }
}

function App() {
  return (
    // <div className="container">
    //   <Navbar />
    //   <h1>Meal Buddy</h1>
    //   <button type="submit" onClick={() => testApiCall()}>
    //     Make api call
    //   </button>
    // </div>
    <Navbar />
  );
}

export default App;
