import React, { Component } from "react";
import { Navbar } from 'react-bootstrap'
import { Nav } from "react-bootstrap";


class Header extends Component {
  render() {
    return (
      <section>
        <Navbar bg="light" expand="lg"
        style={{ 'backgroundImage': "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(210, 246, 252,1) 97%)" }}>         
            <Navbar.Brand className='ms-1' href="#home">
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
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/chicopee_web">Home</Nav.Link>
                <Nav.Link href="/chicopee_web/staff">Staff</Nav.Link>
                <Nav.Link href="/chicopee_web/events">Up Coming Events</Nav.Link>
                <Nav.Link href="/chicopee_web/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>          
        </Navbar>       
      </section>
    );
  }
}

export default Header;
