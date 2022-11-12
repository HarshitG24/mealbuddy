import Navbar from "../navbar/Navbar";
import AddToCart from "../addToCart/AddToCart";
import Logo from "../header/logo";
import "../../Reused.css";

function Settings({ selected, setSelected }) {
  return (
    <div className="container">
      <div className="nav_block">
        <Navbar selected={selected} setSelected={setSelected} />
      </div>
      <div className="content_block">
        <Logo />
        {/* Add content here */}
        <h1>Settings</h1>
      </div>

      <div className="cart_block">
        <AddToCart />
      </div>
    </div>
  );
}

export default Settings;
