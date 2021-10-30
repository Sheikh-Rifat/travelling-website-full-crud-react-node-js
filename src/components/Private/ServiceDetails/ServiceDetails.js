import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useFirebase from "../../../hooks/useFirebase";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { user } = useFirebase();

  let { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState({});
  useEffect(() => {
    const url = `http://localhost:4000/serviceDetails/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data);
      });
  }, [id]);

  // console.log(serviceDetail);

  const name = user?.displayName;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    /*  serviceDetail.email = user?.email;
    // console.log("clicked");
    serviceDetail.name = data.name;
    serviceDetail.duration = data.duration;
    serviceDetail.checkIn = data.checkIn;
    serviceDetail.status = "pending"; */
    data.email = user?.email;
    data.image = serviceDetail.image;
    data.title = serviceDetail.title;
    data.status = "pending";
    console.log(data);
    fetch("http://localhost:4000/usersBooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Booking Confirmed, Please wait for approval");
        }
      });
  };

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
              <div className="my-5 text-center">
                <h1 className="title">{serviceDetail.title}</h1>
                <p className="description">{serviceDetail.description}</p>

                <p className="text-center px-5 fs-5">
                  price : ${serviceDetail.price}/Night
                </p>
                <div className="custom-form ">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Label>Name</Form.Label>
                    <input
                      className="mb-2"
                      placeholder={user?.displayName}
                      {...register("name")}
                    />
                    <Form.Label>Duration</Form.Label>
                    <input
                      type="number"
                      className="mb-2"
                      placeholder="Duration"
                      {...register("duration")}
                    />
                    <Form.Label>Check-In</Form.Label>
                    <input
                      className="mb-4"
                      type="date"
                      {...register("checkIn", { required: true })}
                    />
                    {errors.checkIn && <span>This field is required</span>}

                    <input type="submit" value="Confirm Booking" />
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default ServiceDetails;
