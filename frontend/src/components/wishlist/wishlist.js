import { useState, useEffect } from "react";
import Component from "./component";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function fetch_data() {
      const user_name = await fetch("/api/Account/getUser");
      const user = await user_name.json();
      const fetched_data = await fetch("/api/fetch_wishlist_data/" + user.user);
      const data = await fetched_data.json();
      setWishlist(data);
    }
    fetch_data();
  }, []);

  return (
    <div>
      {wishlist.map((element) => {
        return <Component data={element} />;
      })}
    </div>
  );
}
