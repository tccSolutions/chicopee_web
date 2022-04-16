import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <section>
        <nav
          className="navbar navbar-expand-lg navbar-light shadow-lg border-bottom border-dark"
          style={{ 'backgroundImage': "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(210, 246, 252,1) 97%)" }}
        >
          <div className="container-fluid align-items-end">
            <div className="d-flex flex-column">
              <a href="https://www.hallcounty.org" target="_blank">
                <img
                  src="https://www.hallcounty.org/ImageRepository/Document?documentID=6262"
                  alt="..."
                  width="250px"
                />
              </a>
              <a className="navbar-brand" href="#">
                Chicopee Woods Ag Center
              </a>
            </div>

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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link to="/" className="nav-link ">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/staff" className="nav-link ">
                    Staff
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/events" className="nav-link ">
                    Up-Coming Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link ">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
