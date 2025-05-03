import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../assets/css/Emergency.css'; // We'll create this CSS file

const Emergency = () => {
  const emergencyContacts = [
    { name: "Ambulance", number: "108", icon: "🚑" },
    { name: "Police", number: "100", icon: "🚔" },
    { name: "Fire Department", number: "101", icon: "🚒" },
    { name: "Women's Helpline", number: "1091", icon: "👩" },
    { name: "Child Helpline", number: "1098", icon: "🧒" },
    { name: "Mental Health", number: "1800-599-0019", icon: "🧠" }
  ];

  return (
    <div className="emergency-page">
      {/* Hero Section with Background Image */}
      <div className="emergency-hero d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold text-white mb-3">Emergency Services</h1>
              <p className="lead text-light opacity-75 mb-4">Immediate assistance available 24/7 across India</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        <Row className="g-4">
          {/* Emergency Contacts Column */}
          <Col lg={6}>
            <Card className="border-0 shadow-lg h-100">
              <Card.Body className="p-4 p-md-5">
                <h2 className="fw-bold text-danger mb-4">Emergency Contacts</h2>
                <p className="text-muted mb-4">In case of emergency, please contact these services immediately:</p>
                
                <Row xs={1} md={2} className="g-3">
                  {emergencyContacts.map((contact, index) => (
                    <Col key={index}>
                      <Card className="h-100 border-0 shadow-sm hover-effect">
                        <Card.Body className="d-flex align-items-center">
                          <div className="icon-circle bg-danger bg-opacity-10 text-danger me-3">
                            <span className="fs-3">{contact.icon}</span>
                          </div>
                          <div>
                            <h5 className="mb-1">{contact.name}</h5>
                            <a href={`tel:${contact.number}`} className="text-decoration-none fs-5 fw-bold text-danger">
                              {contact.number}
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Emergency Procedures Column */}
          <Col lg={6}>
            <Card className="border-0 shadow-lg h-100">
              <Card.Body className="p-4 p-md-5">
                <h2 className="fw-bold text-danger mb-4">Emergency Procedures</h2>
                <p className="text-muted mb-4">Follow these steps in case of emergency:</p>
                
                <ListGroup variant="flush" className="procedure-list">
                  <ListGroup.Item className="d-flex align-items-start border-0 py-3">
                    <div className="step-badge bg-danger text-white me-3">1</div>
                    <div>Stay calm and assess the situation</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-start border-0 py-3">
                    <div className="step-badge bg-danger text-white me-3">2</div>
                    <div>Call the appropriate emergency number</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-start border-0 py-3">
                    <div className="step-badge bg-danger text-white me-3">3</div>
                    <div>Provide clear location details</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-start border-0 py-3">
                    <div className="step-badge bg-danger text-white me-3">4</div>
                    <div>Follow operator instructions</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-start border-0 py-3">
                    <div className="step-badge bg-danger text-white me-3">5</div>
                    <div>Administer first aid if trained</div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-start border-0 py-3">
                    <div className="step-badge bg-danger text-white me-3">6</div>
                    <div>Keep emergency exits clear</div>
                  </ListGroup.Item>
                </ListGroup>

                <div className="mt-4 pt-3">
                  <button className="btn btn-danger btn-lg w-100 py-3 fw-bold">
                    <i className="bi bi-telephone me-2"></i> Call Emergency Now
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Emergency;