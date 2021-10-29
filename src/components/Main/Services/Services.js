import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <div className="my-5">
        <h2 className="mt-3 mb-2 pt-3">Live Anywhere</h2>
        <div>
          <Row xs={1} md={2} lg={3} className="g-5">
            {services.slice(0, 6).map((service) => (
              <SingleService key={service._id} service={service} />
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Services;
