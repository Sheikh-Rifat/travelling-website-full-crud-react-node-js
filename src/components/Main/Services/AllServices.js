import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const AllServices = () => {
  document.title = "All Services";
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <Container id="#services">
      <div className="my-5">
        <h2 className="mt-3 mb-2 pt-3">Live Anywhere</h2>
        <div className="my-5">
          <Row xs={1} md={2} lg={3} className="g-5">
            {allServices.map((service) => (
              <SingleService key={service._id} service={service} />
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default AllServices;
