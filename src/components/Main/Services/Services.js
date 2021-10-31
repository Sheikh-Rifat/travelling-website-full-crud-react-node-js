import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container id="#services">
      <div className="my-5">
        <h2 className="mt-3 mb-2 pt-3">Live Anywhere</h2>
        <div className="my-5">
          <Row xs={1} md={2} lg={3} className="g-5">
            {services.slice(0, 6).map((service) => (
              <SingleService key={service._id} service={service} />
            ))}
          </Row>
        </div>
        <NavLink to="/allServices">
          <Button className="my-3">View all Places</Button>
        </NavLink>
      </div>
    </Container>
  );
};

export default Services;
