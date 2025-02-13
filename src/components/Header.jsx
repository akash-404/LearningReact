import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  //selector will be used to get value from redux app store
  const cartItems = useSelector((store) => store.cart?.items);
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
          <li className="cursor-pointer font-bold"><Link to="/cart">Cart ({cartItems?.length})</Link></li>
          <li role="button" className={`login-btn cursor-pointer ${btnName != "Login" ? 'font-bold':''}`} onClick={()=>{
            btnName === "Login" ? setBtnName(loggedInUser) : setBtnName("Login");
          }}>{btnName}</li>
          {/* <li className="font-semibold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
