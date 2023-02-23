import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const activeStyle = {
    textDecoration: "none",
    color: "yellowgreen",
  };

  const inactiveStyle = {};

  const activeClassName = "underline";

  return (
    <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
      <div className={"container-fluid"}>
        <a href="#">
          <span style={{ color: "red" }}>Social App</span>{" "}
        </a>{" "}
        {/* Puedo poner entre a's una imagen-logo */}
        
        <form className={"d-flex"}>
          <input
            type={"search"}
            className={"form-control me-2"}
            placeholder="Search..."
            arial-label={"Search"}
          />
          <button className={"btn btn-outline-primary"} type={"submit"}>
            Search
          </button>
        </form>
        
        <button
          className={"navbar-toggler"}
          type="button"
          data-bs-toggle={"collapse"}
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className={"navbar-toggler-icon"}></span>
        </button>
        
        <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
          <ul className={"navbar-nav mb-2 mb-lg-0 text-center"}>
            <li className={"nav-item"}>
              <NavLink
                to="profile"
                className={
                  //   ({ isActive }) =>
                  //   isActive ? activeClassName : undefined
                  "nav-link"
                }
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="home"
                className={
                  // ({ isActive }) =>
                  // isActive ? activeClassName : undefined
                  "nav-link"
                }
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};
