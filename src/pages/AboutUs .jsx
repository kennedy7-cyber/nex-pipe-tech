import React, { useState } from "react";
import { Link } from "react-router-dom";
import { inst50 } from "../assets";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Badge,
  Image,
  Accordion,
} from "react-bootstrap";

// NexPipeTech - About Page
export default function AboutPage() {
  const [showHistory, setShowHistory] = useState(false);
  const [showService, setShowService] = useState(null);

  const services = [
    {
      id: 1,
      title: "General Plumbing",
      short: "Repairs, installations and preventative maintenance.",
      long: "Full-service plumbing for residential and commercial properties: leak repairs, faucet and fixture replacement, pipe repair, and preventive maintenance plans tailored to your building.",
      img: inst50
    },
    {
      id: 2,
      title: "Drain Cleaning & CCTV Inspection",
      short: "Fast clearing + camera inspection for diagnostics.",
      long: "High-pressure drain cleaning and CCTV pipe inspections that find root causes quickly — including tree root intrusions, blockages, and collapsed pipes. Includes video report and recommended fix.",
      img: "https://media.istockphoto.com/id/2154917134/photo/sewer-workers-cleaning-manhole-and-unblocking-sewers-the-street-sidewalk.webp?a=1&b=1&s=612x612&w=0&k=20&c=MNLxYyyB-SWVd0kJEl3EWBSZDvLQsq1SaBvgQtL4rpE=",
    },
    {
      id: 3,
      title: "Water Heaters & Boilers",
      short: "Installation, repair and energy-efficient upgrades.",
      long: "Supply, install and service gas, electric and solar-compatible water heaters. We offer energy-efficient replacement options and full-warranty work.",
      img: "https://media.istockphoto.com/id/1763583030/photo/modern-gas-boiler-room-lined-with-ceramic-tiles-imitating-wood-visible-emergency-power-supply.jpg?s=612x612&w=0&k=20&c=sStS1kjtNjAylBSsErtl3NPiwsjpclqhRggiRhUH_4U=",
    },
  ];

  const team = [
    {
      name: "kennedy irungu",
      role: "Founder & Head Engineer",
      bio: "6 years in commercial plumbing and project management.",
    },
    {
      name: "Aisha Njeri",
      role: "Operations Manager",
      bio: "Oversees field teams and customer experience.",
    },
    {
      name: "Samuel Otieno",
      role: "Lead Technician",
      bio: "Specialist in CCTV inspection and trenchless repair.",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: 200 },
    { label: "Active Maintenance Clients", value: 78 },
    { label: "Average Response (hrs)", value: 4 },
  ];

  return (
    <div
      className="about-page"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      {/* Hero */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-5 fw-bold">NexPipeTech</h1>
              <p className="lead mb-4">
                Modern plumbing solutions — commercial and residential. Fast
                response, transparent pricing and workmanship guaranteed.
              </p>
              <div>
                <Button
                  variant="light"
                  className="me-2"
                  onClick={() => setShowHistory(true)}
                >
                  Our story
                </Button>
              </div>
            </Col>
            <Col md={5} className="text-center mt-4 mt-md-0">
              <Image
                src=""
                rounded
                fluid
                alt="team"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    To deliver reliable, safe and affordable plumbing services
                    that protect property and improve everyday life for our
                    clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    Be the leading trusted plumbing partner across the region —
                    known for quality, innovation and sustainability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Our Values</Card.Title>
                  <ul className="mb-0">
                    <li>Safety first</li>
                    <li>Transparent pricing</li>
                    <li>Rapid response</li>
                    <li>Long-lasting solutions</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services preview */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="mb-4 fw-bold text-center">What we do</h2>
          <Row>
            {services.map((s) => (
              <Col md={4} key={s.id} className="mb-4">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={s.img}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{s.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{s.short}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => setShowService(s.id)}
                      >
                        Learn more
                      </Button>
                      <Badge bg="success">Trusted</Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4 text-center">
            {stats.map((st) => (
              <Col md={4} key={st.label}>
                <Card className="p-4 shadow-sm border-0 h-100">
                  <h3 className="fw-bold">{st.value}</h3>
                  <p className="mb-0 text-muted">{st.label}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team + CTA */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3 className="fw-bold">Meet the team</h3>
              <p className="text-muted">
                Skilled technicians and friendly support staff — ready to help.
              </p>
              <Accordion defaultActiveKey="0" flush>
                {team.map((m, idx) => (
                  <Accordion.Item eventKey={`${idx}`} key={m.name}>
                    <Accordion.Header>
                      {m.name}{" "}
                      <span className="ms-2 text-muted">— {m.role}</span>
                    </Accordion.Header>
                    <Accordion.Body>{m.bio}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
            <Col md={6} className="text-center">
              <Image
                src="https://source.unsplash.com/collection/1427161/600x400"
                rounded
                fluid
                alt="Team"
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col className="text-center">
              <h4 className="fw-bold">Ready to get started?</h4>
              <p className="text-muted">
                Request a quote or book an appointment — online or by phone.
              </p>
              <Button variant="primary" size="lg">
                Request Quote
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
