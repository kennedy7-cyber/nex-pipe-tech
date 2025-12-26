
// BlogPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { install114, install12, install13 } from "../assets";



const Blogs = () => {
  const [show, setShow] = useState(false);
  const [activePost, setActivePost] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (post) => {
    setActivePost(post);
    setShow(true);
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Plumbing Technology",
      image: "https://images.unsplash.com/photo-1681249537103-9e0c7316d91e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhlJTIwRnV0dXJlJTIwb2YlMjBQbHVtYmluZyUyMFRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      excerpt: "Explore how smart sensors, IoT, and AI are shaping the future of plumbing...",
      content:
        "Plumbing has evolved beyond pipes and wrenches. At Nex Pipe Tech, we integrate smart sensors, AI-driven monitoring, and eco-friendly solutions to ensure sustainable water usage. The future of plumbing will combine durability, efficiency, and technology for smarter living."
    },
    {
      id: 2,
      title: "Eco-Friendly Plumbing Solutions",
      image: install114,
      excerpt: "Green plumbing is more than a trend – it’s a responsibility...",
      content:
        "Eco-friendly plumbing involves water-saving fixtures, greywater recycling, and energy-efficient heating systems. Nex Pipe Tech promotes sustainable installations that not only save resources but also cut costs for homeowners and businesses."
    },
    {
      id: 3,
      title: "Preventive Maintenance Tips",
      image: install13,
      excerpt: "Simple steps to extend the life of your plumbing systems...",
      content:
        "Regular inspections, timely repairs, and professional maintenance help prevent leaks and costly damage. At Nex Pipe Tech, we encourage clients to schedule preventive checkups for long-term peace of mind."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-light text-center py-5">
        <h1 className="display-4">Nex Pipe Tech Blog</h1>
        <p className="lead">
          Insights, Innovations & Best Practices in Plumbing Technology
        </p>
      </div>

      {/* Blog Section */}
      <Container className="my-5">
        <Row>
          {blogPosts.map((post) => (
            <Col md={4} className="mb-4" key={post.id}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={post.image}
                  alt={post.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleShow(post)}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Full Post */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{activePost?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={activePost?.image}
            alt={activePost?.title}
            className="img-fluid mb-3 rounded"
          />
          <p>{activePost?.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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

export default Blogs;
