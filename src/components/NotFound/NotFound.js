import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import error from "../../images/404.png";

const NotFound = () => {
  return (
    <div className="text-center">
      <div className="mt-3">
        <img src={error} alt="notFound" className="img-fluid" />
      </div>
      <NavLink to="/home">
        <Button className="btn btn-primary">Go back</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
