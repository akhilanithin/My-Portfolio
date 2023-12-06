import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiPycharm ,
  SiNetlify 
} from "react-icons/si";

import { FaMicrosoft } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "15px" }}>Visual studio code</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiPycharm />
        <p style={{ fontSize: "15px" }}>Pycharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "15px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{ fontSize: "15px" }}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiNetlify />
        <p style={{ fontSize: "15px" }}>Netlify </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaMicrosoft />
        <p style={{ fontSize: "10px" }}>MS office(Word,Excel,Powerpoint)</p>
      </Col>

    </Row>
  );
}

export default Toolstack;
