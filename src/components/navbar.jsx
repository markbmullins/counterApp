import React, { Component } from "react";
//stateless functional component
const NavBar = ({ totalItems, totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Number of Items{" "}
        <span className="badge badge-pill badge-secondary">{totalItems}</span>
      </a>

      <a className="navbar-brand" href="#">
        Number of Unique Items{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
