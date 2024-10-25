import React from "react";
import "./navbar.css";
import { Outlet, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-out">
        <div className="nav-left">
          <h1 onClick={() => navigate("/")} className="website-name">MyWebsite</h1>
        </div>
        <div className="nav-right">
          <a href="/login" className="login-link">
            Login
          </a>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default NavBar;
