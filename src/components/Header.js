import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="ui secondary menu">
        <div className="header_item">
          {/* <img
          className="header_logo"
          alt=""
          src="https://th.bing.com/th/id/OIP.snTbckwiQr2Aca59Ox8kXAAAAA?pid=ImgDet&w=300&h=300&rs=1"
        /> */}
          <h1 className="heading">Job Finder</h1>
        </div>

        <div className="header_item">
          <Link className="active item" to="/">
            Find Jobs
          </Link>
        </div>

        <div className="header_item">
          <Link className="item" to="/companies">
            See Companies
          </Link>
        </div>

        <div className="header_item">
          <Link className="item" to="/profile">
            My Profile
          </Link>
        </div>

        <div className="header_item">
          <Link className="item" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
