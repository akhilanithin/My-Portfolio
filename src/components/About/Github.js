import React from "react";
import Card from "react-bootstrap/Card";
import Photo from "../../Assets/photo.jpg"


function Github() {
  return (
    <Card className="project-card-view">
    <Card.Body>
    <Card.Text style={{ textAlign: "justify",textDecoration:"bold"}}>AKHILA THANKACHEN</Card.Text>
    <Card.Text style={{ textAlign: "justify" }}>Ph:+91 7902394275(whatsapp)</Card.Text>
    <Card.Text style={{ textAlign: "justify" }}>Email:akhilathankachen@gmail.com</Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Github;
