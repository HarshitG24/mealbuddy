// AUTHOR: HARSHIT GAJJAR
import logo from "../../images/app_logo.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logo_container">
      <img src={logo} alt="This is the logo" className="logo_size" />
      <h1 className="company_name">MealBuddy</h1>
    </div>
  );
}

Logo.propTypes = {};

export default Logo;
