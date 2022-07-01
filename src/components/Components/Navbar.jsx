import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          DIM<span style={{ fontSize: 10 }}>CAPA</span>
        </span>
        <div className="justify-content-end d-flex">
          <Link to="/logs">
            <button className="btn btn-dark"> Logs</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
