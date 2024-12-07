import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "./FranchisePage.css";

const FranchisePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-start">
              <h1 className="hero-title">Empower Your Business</h1>
              <p className="hero-subtitle">
                Partner with us and bring innovation and excellence to your
                community. Join our growing network of successful franchises.
              </p>
              <Button variant="primary" className="hero-button">
                Become a Partner
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Franchise Opportunities"
                className="img-fluid hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h2 className="section-title">About Us</h2>
              <p className="section-text">
                We are committed to delivering high-quality products and
                exceptional business opportunities. Our franchise network
                empowers communities with innovation, growth, and support.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <Container>
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="benefit-card">
                <div className="card-icon">💊</div>
                <Card.Body>
                  <Card.Title>High-Quality Products</Card.Title>
                  <Card.Text>
                    Access trusted pharmaceutical solutions designed for
                    success.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="benefit-card">
                <div className="card-icon">🌐</div>
                <Card.Body>
                  <Card.Title>Global Network</Card.Title>
                  <Card.Text>
                    Join a network of successful franchises worldwide.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="benefit-card">
                <div className="card-icon">📈</div>
                <Card.Body>
                  <Card.Title>Business Growth</Card.Title>
                  <Card.Text>
                    Unlock exclusive resources to scale and grow your business.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <Container>
          <h2 className="section-title text-center">How It Works</h2>
          <Row className="steps-container text-center">
            <Col md={4}>
              <div className="step">
                <div className="step-number">1</div>
                <h5>Submit Your Application</h5>
                <p>Fill out our easy-to-use franchise application form.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="step">
                <div className="step-number">2</div>
                <h5>Meet with Our Team</h5>
                <p>Discuss your goals with our franchise experts.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="step">
                <div className="step-number">3</div>
                <h5>Launch Your Franchise</h5>
                <p>Open your franchise with our support and resources.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <Container>
          <h2 className="section-title text-center">What Our Partners Say</h2>
          <div className="testimonials-carousel">
            <p className="testimonial">
              "Joining this franchise was the best decision I made for my
              career."
            </p>
            <p className="testimonial">
              "Their support system is phenomenal. Highly recommend!"
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <h2 className="section-title text-center">Get in Touch</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FranchisePage;
