import { useRef } from "react";
import "./login.css";

export default function Login() {
  const input_email = useRef();
  const input_password = useRef();

  async function check_credentials() {
    let user_cred = {
      email: input_email.current.value,
      password: input_password.current.value,
    };

    const headers = new Headers({ "Content-Type": "application/json" });

    const opts = {
      method: "post",
      headers: headers,
      body: JSON.stringify(user_cred),
    };

    const resp = await fetch("/api/account/login", opts);
    if (resp.status == 200 && resp.statusText == "OK") {
      window.location.replace("/");
    } else {
      alert("please check your credentials");
    }
  }
  return (
    <div className="login">
      <div className="login_form">
        <div className="login_logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png"
            alt="pizza logo"
          />
        </div>
        <div className="login_fields">
          <div className="login_input_group">
            <input
              type="email"
              id="email"
              required
              className="login_input"
              ref={input_email}
            />
            <label for="email" className="login_input_label">
              Email Address
            </label>
          </div>

          <div className="login_input_group">
            <input
              type="password"
              id="password"
              required
              className="login_input"
              ref={input_password}
            />
            <label for="password" className="login_input_label">
              Password
            </label>
          </div>

          <button
            id="clickme"
            className="login_btn"
            onClick={check_credentials}
          >
            Login
          </button>

          <div className="login_no_account">
            <p>Don't have an account?</p>
            <a href="/createAccount">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}
