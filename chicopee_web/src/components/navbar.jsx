import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <section>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow shadow-5">
          <div class="container-fluid align-items-end">
              <div class='d-flex flex-column'>
              <img src='https://www.hallcounty.org/ImageRepository/Document?documentID=6262' alt='...'
              width='250px'/>
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
                  <a class="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Staff
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                   Up-Coming Events
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Contact
                  </a>
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
