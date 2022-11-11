import { useState } from "react";
import "./createAccount.css";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="container">
      <div class="card">
        <h1>Register New User</h1>

        <div class="input_group">
          <input type="name" id="name" required class="input" />
          <label for="name" class="input_label">
            Full Name
          </label>
        </div>

        <div class="input_group">
          <input type="email" id="email" required class="input" />
          <label for="email" class="input_label">
            Email
          </label>
        </div>

        <div class="input_group">
          <input type="password" id="password" required class="input" />
          <label for="password" class="input_label">
            Password
          </label>
        </div>
        <div>
          <button id="create" class="create_account">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
