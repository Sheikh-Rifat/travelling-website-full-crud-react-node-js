import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-1">
      <h2>Not sure where to go? Perfect.</h2>
      <NavLink to="/allServices">
        <Button>I'm flexible</Button>
      </NavLink>
    </div>
  );
};

export default Banner;
