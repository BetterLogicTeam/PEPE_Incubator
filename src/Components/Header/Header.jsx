import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import header_logo from "../../assets/header_logo.png";
import telegram from "../../assets/telegram.png";
import twiter from "../../assets/twiter.png";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="pt-0 mt-0">
        <Container>
          <Navbar.Brand href="#home">
            <div className="nav_black_box">
              <div className="nav_green_box">
                <img src={header_logo}></img>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-5 header_tag_main">
              <Nav.Link href="#About" className="text-white green_hvr">About</Nav.Link>
              <Nav.Link href="#Features" className="text-white green_hvr">Features</Nav.Link>
              <Nav.Link href="#Roadmap" className="text-white green_hvr">Roadmap</Nav.Link>
              <div className="flx_icn">
              <Nav.Link href="#telegram" className="hedr_logo">
               <a href="https://t.me/pepeincubator" target="_blank"><img src={telegram}></img></a>
              </Nav.Link>
              <Nav.Link href="#twitter" className="hedr_logo">
               <a href="https://twitter.com/pepeincubator" target="_blank"><img src={twiter}></img></a> 
              </Nav.Link>
              </div>
            </Nav>
            <Nav>
              <Nav.Link href="#Launch App" className="nav_green_scnd_box">
              <a href="http://app.pepeincubator.org/" target="_blank"> <div >
                    <span>Launch App</span>
                </div></a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
