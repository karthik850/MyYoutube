import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <Container fluid bg="dark" className="footer" >
      <Row className="justify-content-md-center">
        <Col md="4" align="center" bg="dark">
          <h3>Developed by GenzFuntastic</h3>
        </Col>
        <Col md="4" align="center" bg="dark">
            <div className="footer-icons">
        <SocialMedia footer="yes" />
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;