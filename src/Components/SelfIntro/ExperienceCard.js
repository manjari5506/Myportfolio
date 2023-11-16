import React from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "./experiencecard.css"

function ExperienceCard({ logo, title, company, companyD, tech, techD }) {
    return (
        <Card className="experience-card-view" style={{ backgroundColor: "transparent", color: "white" }}>
            <Card style={{ display: "flex", flexDirection: "row " , backgroundColor: "transparent", color: "white"}}>
                <Card.Img variant="top" src={logo} alt="Logo" style={{ width: '100px', height: '100px', margin: 'auto' }} />
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text style={{fontWeight: "10px"}}>
                        { company}
                    </Card.Text>
                    <Card.Text>
                        { companyD}
                    </Card.Text>
                </Card.Body>
            </Card>

            <ListGroup variant="flush">
                <ListGroup.Item style={{backgroundColor: "transparent", color: "white"}}>{techD}</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: "transparent", color: "white"}}>Skills:  {tech}</ListGroup.Item>
                {/* <ListGroup.Item className="text-center">Bullet Point 3</ListGroup.Item> */}
            </ListGroup>
        </Card>
    );
}
export default ExperienceCard;