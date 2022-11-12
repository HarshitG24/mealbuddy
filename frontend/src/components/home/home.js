import Promotion from "./promotion";
import Navbar from "../navbar/Navbar";
import AddToCart from "../addToCart/AddToCart";
import Logo from "../header/logo";
import "../../Reused.css";

function Home({ selected, setSelected }) {
  return (
    <div className="container">
      <div className="nav_block">
        <Navbar selected={selected} setSelected={setSelected} />
      </div>
      <div className="content_block">
        <Logo />
        {/* Your content starts here */}
        <Promotion />
        {/* Your content ends here */}
      </div>

      <div className="cart_block">
        <AddToCart />
      </div>
    </div>
  );
}

export default Home;
