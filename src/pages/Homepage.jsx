
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const services = [
  {
    id: "leak-repair",
    title: "Leak Detection & Repair",
    img: "https://media.istockphoto.com/id/2158091005/photo/damage-assessment.webp?a=1&b=1&s=612x612&w=0&k=20&c=59u7jPd23r15wWhxppMWdY8tW_U7c6KEniLypJ63uiI=",
    desc: "Fast, non-invasive detection and permanent fixes for pipe and fixture leaks in homes and businesses.",
  },
  {
    id: "installation",
    title: "New Installations",
    img: "https://media.istockphoto.com/id/913023300/photo/industrial-water-pipeline.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qony3TWuCCD1VvWuppAOsl8z2oKZJhF7kq5YuzSrrC8=",
    desc: "Professional installation of piping, water heaters, fixtures, and smart water systems—built to code.",
  },
  {
    id: "drain-cleaning",
    title: "Drain Unclogging & Cleaning",
    img: "https://media.istockphoto.com/id/2183104950/photo/unclogging-a-large-drain.webp?a=1&b=1&s=612x612&w=0&k=20&c=cqp-GdiSVvb4Nk5RKwUlmbvC5nnsSL038E9Jt2-lUgY=",
    desc: "High-pressure jetting and camera inspections to clear blockages and prevent future backups.",
  },
];

const carouselSlides = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/503325376/photo/plumber-on-the-kitchen.jpg?s=612x612&w=0&k=20&c=NXdkmsOlPbG4wJo3T-LWU5Dijqk8wYXFHqr1wIdJkhM=",
    title: "Welcome to Nex Pipe Tech",
    text: "Professional plumbing services you can rely on.",
    btnText: "Explore Services",
    btnLink: "/services",
    btnClass: "btn btn-primary",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1596110291127-ae31d996aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    title: "Expert Installations",
    text: "From small repairs to large projects.",
    btnText: "Contact Us",
    btnLink: "/contact-us",
    btnClass: "btn btn-success",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/2188915034/photo/electrical-and-plumbing-washing-machine-connections-indoor.jpg?s=612x612&w=0&k=20&c=S7MqWu4d8ryBZJtE-wSpuSY9fX9x-6F8LrdS6mlNxxc=",
    title: "Reliable Maintenance",
    text: "Ensuring your water systems run smoothly.",
    btnText: "Learn More",
    btnLink: "/about-us",
    btnClass: "btn btn-warning",
  },
];

const Homepage = () => {
  return (
    <div>
      {/* Bootstrap Carousel */}
      <div
        id="homepageCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="3000"
            >
              <img
                src={slide.img}
                className="d-block w-100 object-fit-cover"
                alt={slide.title}
              />

              {/* Caption with background overlay for readability */}
              <div className="carousel-caption d-flex flex-column h-100 align-items-center justify-content-center text-center">
                <div
                  className="p-3 rounded"
                  style={{
                    background: "rgba(0, 0, 0, 0.55)",
                    maxWidth: "600px",
                  }}
                >
                  <h2 className="fw-bold text-white text-shadow">
                    {slide.title}
                  </h2>
                  <p className="text-light">{slide.text}</p>
                  <Link to={slide.btnLink} className={slide.btnClass}>
                    {slide.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homepageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homepageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-2">Our Core Plumbing Services</h2>
            <p className="text-muted mb-0">
              Reliable, professional, and ready when you need us.
            </p>
          </div>

          <Row xs={1} md={3} className="g-4">
            {services.map((s) => (
              <Col key={s.id}>
                <Card className="h-100 shadow-sm border-0">
                  {s.img ? (
                    <Card.Img
                      variant="top"
                      src={s.img}
                      alt={`${s.title} – Nex Pipe Tech`}
                      loading="lazy"
                      style={{ objectFit: "cover", height: 200 }}
                    />
                  ) : null}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-semibold text-black ">
                      {s.title}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1 ">
                      {s.desc}
                    </Card.Text>
                    <div className="d-grid">
                      <Button
                        as={Link}
                        to={`/services#${s.id}`}
                        variant="primary"
                        className="mt-2"
                      >
                        Learn more
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* CTA below the cards */}
          <div className="mt-5 p-4 p-md-5 bg-white rounded-3 shadow-sm text-center">
            <h3 className="fw-bold mb-2">Need a plumber today?</h3>
            <p className="text-muted mb-4">
              Get a free quote or book a same-day visit. Our certified
              technicians are on standby.
            </p>
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              <Button as={Link} to="/services" variant="primary" size="lg">
                View all services
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="outline-primary"
                size="lg"
              >
                Request a quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Floating Socials */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "45%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <a
          href="https://wa.me/254758849440"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
            style={{ width: "25px", height: "25px" }}
          />
        </a>
        <a
          href="https://instagram.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
            alt="Instagram"
            style={{ width: "25px", height: "25px" }}
          />
        </a>
        <a
          href="https://facebook.com/yourplumbingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
            style={{ width: "25px", height: "25px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Homepage;
