import React from "react";
import useFirebase from "../../../hooks/useFirebase";
import { useForm } from "react-hook-form";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Host.css";

const Host = () => {
  document.title = "Host Resort";
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    fetch("https://chilling-barrow-54100.herokuapp.com/host", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="my-5 py-5">
      <Container>
        <div className="my-3">
          <h2>
            Host a resort ,{" "}
            <span className="text-primary">{user.displayName}</span>
          </h2>
        </div>
        <div>
          <Row>
            <Col sm={12} md={6}>
              <div className="my-5 py-5">
                <img
                  src="https://i.ibb.co/nMsd85y/kelsey-curtis-27u-Gzl-AFw-unsplash.jpg"
                  alt="hostImg"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="my-5 py-5 custom-form  ">
                <form className="host" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Label>Title</Form.Label>
                  <input
                    placeholder="Title"
                    {...register("title", { required: true })}
                  />
                  <Form.Label>Destination</Form.Label>
                  <input
                    placeholder="Destination"
                    {...register("destination")}
                  />
                  <Form.Label>Description</Form.Label>
                  <textarea
                    placeholder="Description"
                    {...register("description")}
                  />
                  <Form.Label>Price</Form.Label>
                  <input
                    type="number"
                    placeholder="Price"
                    {...register("price")}
                  />
                  <Form.Label>Image URL</Form.Label>
                  <input
                    placeholder="e.g: https://i.ibb.co/G3S8xpY/5e43ad79-8dc8-4ff1-8b35-c8eeadae9974.jpg"
                    {...register("image")}
                  />

                  {errors.title && <span>This field is required</span>}

                  <input type="submit" className="project-btn" />
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Host;
