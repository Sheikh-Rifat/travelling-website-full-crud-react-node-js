import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-1">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://i.ibb.co/ggKMs7g/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>TEAM Travelling</h3>

            <p>
              Full-body workouts designed to build strength and endurance, using
              the energy of the group and the expertise of the certified
              personal trainer to maximize your results.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://i.ibb.co/3mgnFpk/60557a02-0a50-45b5-9fc9-12df3ab2f4d1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>PERSONAL Tour Guide</h3>
            <p>
              One-on-one personalized workouts with a certified personal trainer
              designed to make you stronger from the inside out.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://i.ibb.co/qgnYjd4/13be865d-1274-41b8-84cd-46249922f0d1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Select A tour place</h3>

            <p>
              Through a short survey, conversation and a movement assessment,
              our team will prescribe the perfect program to get you started and
              on track to meet your fitness goals.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
