import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import appImg from "../../../images/refresh.jpg";
import qrCode from "../../../images/QR.png";

const AppSection = () => {
  return (
    <Container className="my-5 py-5">
      <div className="border rounded">
        <Row>
          <Col sm={12} md={3}>
            <img src={appImg} alt="applogo" height="200" width="300" />
          </Col>
          <Col sm={12} md={6}>
            <h2 className="mx-4 ps-5">Plan your trip in a snap on the app</h2>
            <p>
              <small className="mx-4 ps-5 text-center">
                From home or hammock, organize your entire escape and explore
                app offers
              </small>
            </p>
            <p className="mx-4 ps-5">
              <strong>Scan The QR code to Download the app</strong>
            </p>
          </Col>
          <Col sm={12} md={3}>
            <img src={qrCode} alt="qr" height="200" width="200" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppSection;
