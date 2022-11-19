// AUTHOR: HARSHIT GAJJAR
import Logo from "../header/logo";
import "../../Reused.css";
import "./settings.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotLoggedIn from "../NoLogIn/NotLoggedIn";

function Settings() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState({});

  async function fetchUsers() {
    const user_name = await fetch("/api/Account/getUser");
    const user = await user_name.json();
    setUser(user);

    const resp = await fetch("/api/user/getUser/" + user.user);
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
  }, []);

  async function updateUserProfile() {
    const headers = new Headers({ "Content-Type": "application/json" });

    const options = {
      method: "post",
      headers: headers,
      body: JSON.stringify({ email, name, password }),
    };
    const resp = await fetch("/api/user/updateProfile", options);
    const output = await resp.json();

    if (output.status === 200) {
      alert("data updated successfully!");
    } else {
      alert("failed to update data");
    }
  }

  async function deleteUserProfile() {
    const headers = new Headers({ "Content-Type": "application/json" });

    const opts = {
      method: "delete",
      headers: headers,
    };

    const resp = await fetch("/api/user/deleteProfile/" + user.user, opts);
    const output = await resp.json();

    if (output.status === 200) {
      <Link to="/home" />;
    } else {
      alert("failed to delete data");
    }
  }

  function settingsUI() {
    return (
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
          <button
            className="button_setting"
            onClick={() => updateUserProfile()}>
            Update Profile
          </button>
          <button
            className="button_setting"
            onClick={() => deleteUserProfile()}>
            Delete Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="content_block">
      <Logo />
      {"user" in user ? settingsUI() : <NotLoggedIn />}
    </div>
  );
}

export default Settings;
