import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiGithub,
  SiJira,
  SiBitbucket,
  SiSlack,
  SiZoom,
  SiGooglemeet
} from "react-icons/si";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visualstudio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <p>Jira</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p>Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
        <p>Bitbucket</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiZoom />
        <p>Zoom</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglemeet />
        <p>Meet</p>
      </Col>
    </Row>
  );
}

export default ToolStack;