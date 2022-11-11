import { useState } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="form">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png"
            alt="pizza logo"
          />
        </div>
        <div className="fields">
          <div class="input_group">
            <input type="email" id="email" required class="input" />
            <label for="email" class="input_label">
              Email Address
            </label>
          </div>

          <div class="input_group">
            <input type="password" id="password" required class="input" />
            <label for="password" class="input_label">
              Password
            </label>
          </div>

          <button id="clickme" class="login_btn">
            Login
          </button>

          <div class="no_account">
            <p>Don't have an account?</p>
            <a href="./newuser.html">Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}
