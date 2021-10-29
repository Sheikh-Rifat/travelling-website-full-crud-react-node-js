import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  let { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState({});
  useEffect(() => {
    const url = `http://localhost:4000/serviceDetails/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetail(data));
  }, []);
  return (
    <div className="my-5 py-5">
      <Container>
        <section className="mt-5 mb-5">
          <Row className="mt-5 mb-5">
            {/* image section */}
            <Col sm={12} md={6}>
              <div className="my-5 img-description">
                <img
                  src={serviceDetail.image}
                  alt="serviceImage"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="my-5">
                <h1 className="title">{serviceDetail.title}</h1>
                <p className="description">{serviceDetail.description}</p>

                <p className="text-start px-5 fs-5">
                  price : ${serviceDetail.price}/Night
                </p>
                <Button>Confirm Booking</Button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default ServiceDetails;
