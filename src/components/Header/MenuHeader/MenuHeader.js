import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./MenuHeader.css";

const MenuHeader = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home#services">
                Services
              </Nav.Link>

              {user.email && (
                <Nav.Link as={Link} to="/bookings">
                  Bookings
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={Link} to="/manageBookings">
                  Manage Bookings
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={Link} to="/addService">
                  Host
                </Nav.Link>
              )}

              {user.email ? (
                <Button onClick={logOut} variant="light" className="me-3">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}

              {user.email && (
                <Navbar.Text>
                  Signed in as: <a href="#login">{user?.displayName}</a>
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
