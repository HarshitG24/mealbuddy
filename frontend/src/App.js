import "./App.css";

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
    <div className="container">
      <h1>Meal Buddy</h1>
      <button type="submit" onClick={() => testApiCall()}>
        Make api call
      </button>
    </div>
  );
}

export default App;
