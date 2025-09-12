import React, { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8p3pl5l",
        "template_iuaz4nq",

        form.current,
        "0iXLVJkaS3tAnR-bG"
      )
      .then(
        () => {
          setShowSuccess(true);
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div className="bg-light py-3">
      <Container>
        {/* Page Title */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="fw-bold text-primary">Contact Nex Pipe Tech</h2>
            <p className="text-muted">
              Get in touch with us for all your plumbing and pipe technology
              needs. Our team is ready to assist you 24/7.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Information */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <h5 className="fw-bold text-primary mb-3">Head Office</h5>
                <p>
                  <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                  wangige ,kabete,kikuyu
                </p>
                <p>
                  <i className="bi bi-telephone-fill text-success me-2"></i>
                  +254758849440
                </p>
                <p>
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  adichronix255@gmail.com
                </p>
                <p>
                  <i className="bi bi-clock-fill text-warning me-2"></i>
                  Mon - Sat: 8:00 AM - 6:00 PM
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col md={8} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold text-primary mb-3">Send Us a Message</h5>
                <Form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="user_name"
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="user_email"
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="subject" className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Message subject"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="message" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="Type your message..."
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="px-4">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Google Map Section */}
        <Row className="mt-5">
          <Col>
            <div className="ratio ratio-16x9 shadow-sm">
              <iframe
                title="Nex Pipe Tech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8562406414294!2d36.82194631526121!3d-1.2920659990573152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f8fdf9a7a1%3A0xadc62f2dd7a1f59!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1680000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Success Modal */}
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ✅ Thank you for reaching out! We’ll get back to you shortly.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowSuccess(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "45%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px", // also reduced the gap slightly
          zIndex: 1000,
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/254758849440"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
            style={{ width: "20px", height: "20px" }}
          />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="Instagram"
            style={{ width: "20px", height: "20px" }}
          />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
