import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          BOOKSSTOR
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/ContactPage">
                Contact us
              </Link>
            </li>

            <li className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle active"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shorting
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    High to low price
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Low to high price
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Most sale product
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
         <SearchBar/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
