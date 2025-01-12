import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between bg-gray-100 shadow-md mb-10 py-2">
      <div className="logo-container ml-4">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex gap-8 p-4">
          <li>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
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
