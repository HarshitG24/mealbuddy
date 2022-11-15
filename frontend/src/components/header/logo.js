// AUTHOR: HARSHIT GAJJAR
import logo from "../../images/app_logo.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logo_container">
      <img src={logo} alt="This is the logo" className="logo_size" />
      <p className="company_name">MealBuddy</p>
    </div>
  );
}

export default Logo;
