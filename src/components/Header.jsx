import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {

  let [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li className="login-btn" onClick={()=>{
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
