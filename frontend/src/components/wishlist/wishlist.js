//AUTHOR: MIHIR MESIA
import { useState, useEffect } from "react";
import Component from "./component";
import default_img from "../../images/wishlist-empty.jpeg";
import Logo from "../header/logo";
import "../../Reused.css";
import "./wishlist.css";

import Spinner from "../Spinner/Spinner";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch_data() {
      setLoading(true);
      try {
        const user_name = await fetch("/api/account/getUser");
        const user = await user_name.json();
        console.log(user.user);
        const fetched_data = await fetch(
          "/api/fetch_wishlist_data/" + user.user
        );
        const data = await fetched_data.json();
        setWishlist(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetch_data();
  }, []);

  async function deleteData(pid) {
    let arr = [...wishlist];

    arr = arr.filter((e) => e.pid !== pid);
    setWishlist(arr);
    const user_name = await fetch("/api/account/getUser");
    const user = await user_name.json();
    let delete_data = {
      user: user.user,
      pid: pid,
    };

    const headers = new Headers({ "Content-Type": "application/json" });

    const opts = {
      method: "delete",
      headers: headers,
      body: JSON.stringify(delete_data),
    };

    const resp = await fetch("/api/deleteWishlist", opts);
    if (resp.status !== 200) {
      alert("unable to delete");
    }
  }

  function wishlist_showUI() {
    return (
      <div>
        <Logo />
        <div className="mainarea">
          <h1>Wishlist</h1>

          <div className="wishlist_data_list">
            {wishlist.length === 0 ? (
              <div>
                <img src={default_img} alt="empty_wishlist" />
              </div>
            ) : (
              wishlist.map((element) => {
                return <Component data={element} onClick={deleteData} />;
              })
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content_block">
      {loading ? <Spinner /> : wishlist_showUI()}
    </div>
  );
}

Wishlist.propTypes = {};
