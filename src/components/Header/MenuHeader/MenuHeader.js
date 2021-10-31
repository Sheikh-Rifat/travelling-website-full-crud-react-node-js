import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/image.png";

import "./MenuHeader.css";

const MenuHeader = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="logo"
              height="100"
              width="100"
              className="img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>

              {user.email && (
                <Nav.Link as={NavLink} to="/userBookings">
                  Bookings
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={NavLink} to="/manageBookings">
                  Manage Bookings
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={NavLink} to="/host">
                  Host
                </Nav.Link>
              )}

              {user.email ? (
                <Button
                  onClick={logOut}
                  variant="light"
                  className="me-3 project-btn"
                >
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login" className="custom-login">
                  Login
                </Nav.Link>
              )}

              {user.email && (
                <Navbar.Text>
                  Signed in as:
                  <a href="#login"> {user?.displayName}</a>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuHeader;
