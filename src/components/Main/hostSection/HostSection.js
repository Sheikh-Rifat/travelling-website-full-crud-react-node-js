import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HostSection.css";

const HostSection = () => {
  return (
    <Container className="text-start my-5 py-5">
      <div className="hosting-section text-light">
        <h2>Try hosting</h2>
        <p>
          Earn extra income and unlock new opportunities by sharing your space.
        </p>
        <NavLink to="/host">
          <Button className="project-btn">Learn More</Button>
        </NavLink>
      </div>
    </Container>
  );
};

export default HostSection;
