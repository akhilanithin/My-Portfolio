import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { BsFiletypeJson, BsFiletypeJsx } from "react-icons/bs";
import { FaAngular } from "react-icons/fa";
import { TbSql } from "react-icons/tb";


import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  SiGithub,
  SiJquery,
  SiPostgresql,
  SiDjango

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "15px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <p style={{ fontSize: "15px" }}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ fontSize: "15px" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
        <p style={{ fontSize: "15px" }}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "15px" }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
        <p style={{ fontSize: "15px" }}>Jquery</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeJson />
        <p style={{ fontSize: "15px" }}>JSON</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "15px" }}>Node JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "15px" }}>React JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular />
        <p style={{ fontSize: "15px" }}>Angular JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeJsx />
        <p style={{ fontSize: "15px" }}>JSX</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "15px" }}>Mango DB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
        <p style={{ fontSize: "15px" }}>SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "15px" }}>Postgresql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: "15px" }}>Github</p>
      </Col>
    </Row>
  );
}

export default Techstack;
