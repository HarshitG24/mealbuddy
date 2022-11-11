import { useRef } from "react";
import "./createAccount.css";

export default function CreateAccount() {
  const user_name = useRef();
  const user_email = useRef();
  const user_password = useRef();

  async function createUser() {
    const name = user_name.current.value;
    const email = user_email.current.value;
    const password = user_password.current.value;
    let newUser = {
      name: name,
      email: email,
      password: password,
    };

    const headers = new Headers({ "Content-Type": "application/json" });

    const opts = {
      method: "post",
      headers: headers,
      body: JSON.stringify(newUser),
    };

    const resp = await fetch("/api/createAccount/createUser", opts);
    if (resp.status == 200 && resp.statusText == "OK") {
      console.log("vamanos muchachos");
    } else {
      alert("error creating account");
    }
  }

  return (
    <div className="card_page">
      <div class="card_container">
        <div class="card">
          <h1>Register New User</h1>
          <div class="input_group">
            <input
              type="name"
              id="name"
              required
              class="input"
              ref={user_name}
            />
            <label for="name" class="input_label">
              Full Name
            </label>
          </div>
          <div class="input_group">
            <input
              type="email"
              id="email"
              required
              class="input"
              ref={user_email}
            />
            <label for="email" class="input_label">
              Email
            </label>
          </div>
          <div class="input_group">
            <input
              type="password"
              id="password"
              required
              class="input"
              ref={user_password}
            />
            <label for="password" class="input_label">
              Password
            </label>
          </div>
          <div>
            <button id="create" class="create_account" onClick={createUser}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
