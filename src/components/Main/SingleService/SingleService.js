import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SingleService = ({ service }) => {
  //   console.log(service);
  const { title, image, price, _id } = service;
  return (
    <>
      <Col>
        <Card className="h-100">
          <Card.Img variant="top" src={image} className="img-fluid" />
          <Card.Body>
            <div className="d-flex justify-content-between mb-3">
              <Card.Title>{title}</Card.Title>
              <Card.Text>${price}/night</Card.Text>
            </div>
            <NavLink to={`/serviceDetails/${_id}`}>
              <Button className="mt-3 project-btn">View details</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleService;
