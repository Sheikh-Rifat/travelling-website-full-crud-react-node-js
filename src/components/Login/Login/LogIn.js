import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import loginImg from "../../../images/undraw_Login_re_4vu2.png";
import googleLogo from "../../../images/logo-from-builder.optimized.svg";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const LogIn = () => {
  const { signInUsingGoogle, setUser, setIsLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <Container>
        <h2>Log In</h2>
        <Row>
          <Col sm={12} md={6}>
            <div className="my-5 py-5">
              <img src={loginImg} alt="log in" className="img-fluid" />
            </div>
          </Col>

          <Col sm={12} md={6}>
            <div className="my-5 py-5">
              <div className="mt-5 pt-5 mb-4">
                <h3>Login User</h3>
              </div>
              <Button onClick={handleGoogleLogin}>
                <img src={googleLogo} className="img-fluid me-2" alt="google" />
                Sign In With Google
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
