// AUTHOR: HARSHIT GAJJAR
import logo from "../../images/app_logo.png";
import "./logo.css";
import PropTypes from "prop-types";

function Logo() {
  return (
    <div className="logo_container">
      <img src={logo} alt="This is the logo" className="logo_size" />
      <p className="company_name">MealBuddy</p>
    </div>
  );
}

Logo.propTypes = {};

export default Logo;
