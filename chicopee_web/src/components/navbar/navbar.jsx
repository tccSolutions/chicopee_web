import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <section>
        <nav
          class="navbar navbar-expand-lg navbar-light shadow-lg border-bottom border-dark"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(255,240,255,1) 0%, rgba(0,252,255,1) 74%, rgba(0,245,223,1) 100% )" }}
        >
          <div class="container-fluid align-items-end">
            <div class="d-flex flex-column">
              <a href="https://www.hallcounty.org" target="_blank">
                <img
                  src="https://www.hallcounty.org/ImageRepository/Document?documentID=6262"
                  alt="..."
                  width="250px"
                />
              </a>
              <a class="navbar-brand" href="#">
                Chicopee Woods Ag Center
              </a>
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <Link to="/" class="nav-link ">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/staff" class="nav-link ">
                    Staff
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/events" class="nav-link ">
                    Up-Coming Events
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link ">
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
