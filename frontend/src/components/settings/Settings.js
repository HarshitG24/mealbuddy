// AUTHOR: HARSHIT GAJJAR
import Logo from "../header/logo";
import "../../Reused.css";
import "./settings.css";
import { useEffect, useState } from "react";

function Settings() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  let data = {
    email: "mihir123@gmail.com",
  };
  async function fetchUsers() {
    const resp = await fetch("/api/user/getUser/" + data.email);
    const userData = await resp.json();

    let d = userData?.udata || {};

    setEmail(d?.email || "");
    setPassword(d?.password || "");
    setName(d?.name || "");
  }

  useEffect(() => {
    (async () => {
      await fetchUsers();
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  });

  async function updateUserProfile() {
    const headers = new Headers({ "Content-Type": "application/json" });

    const options = {
      method: "post",
      headers: headers,
      body: JSON.stringify({ email: "mihir123@gmail.com", name, password }),
    };
    await fetch("/api/user/updateProfile", options);
  }

  async function deleteUserProfile() {
    const headers = new Headers({ "Content-Type": "application/json" });

    const opts = {
      method: "delete",
      headers: headers,
    };

    await fetch("/api/user/deleteProfile/" + data.email, opts);
  }

  return (
    <div className="content_block">
      <Logo />
      <div className="settings_all_data">
        <div className="setting_block">
          <p className="setting_label">Email</p>
          <input
            className="setting_input"
            onChange={(e) => setEmail(e?.target?.value || "")}
            value={email}
            placeholder="Email"
            disabled
          />
        </div>
        <div className="setting_block">
          <p className="setting_label">Name</p>
          <input
            className="setting_input"
            onChange={(e) => setName(e?.target?.value || "")}
            value={name}
            placeholder="Name"
          />
        </div>
        <div className="setting_block">
          <p className="setting_label">Password</p>
          <input
            className="setting_input"
            onChange={(e) => setPassword(e?.target?.value || "")}
            value={password}
            placeholder="Password"
          />
        </div>

        <div className="setting_actions">
          <button onClick={() => updateUserProfile()}>Update Profile</button>
          <button onClick={() => deleteUserProfile()}>Delete Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
