import React, { Component } from "react";
import { Navbar } from 'react-bootstrap'
import { Nav } from "react-bootstrap";


class Header extends Component {
  render() {
    return (
      <section>
        <Navbar bg="light" expand="lg" className='container-fluid'
        style={{ 'backgroundImage': "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(210, 246, 252,1) 97%)", 'zIndex':'3000' }}>         
            <Navbar.Brand className='ms-1' href="https://www.hallcounty.org" style={{'paddingBottom':'0'}}>
            <div className="d-flex flex-column">              
                <img
                  src="https://www.hallcounty.org/ImageRepository/Document?documentID=6262"
                  alt="..."
                  width="250px"
                />
              
              <h4 className="navbar-brand" >
                Chicopee Woods Ag Center
              </h4>
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
