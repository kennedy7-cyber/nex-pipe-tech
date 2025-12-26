
import React, { useState } from "react";
import { Modal, Button, Card, Row, Col, Container } from "react-bootstrap";
import { install115, install13 } from "../assets";

// Example services data
const servicesData = [
  {
    id: 1,
    title: "Leak Detection & Repair",
    img: "https://media.istockphoto.com/id/1820259728/photo/leaked-water-from-pvc-plastic-pipe-plumber-repair-broken-water-pipe.webp?a=1&b=1&s=612x612&w=0&k=20&c=IqohHN7oJlQ-4y5JmToLFAMNDgS_6dLt-dDSYCRDcns=",
    short: "Quick identification and repair of water leaks.",
    long: "We use advanced tools to detect hidden leaks in pipes, walls, and floors. This prevents property damage and saves water bills."
  },
  {
    id: 2,
    title: "Pipe Installation",
    img: "https://images.unsplash.com/photo-1646009445351-b8192e095f3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBpcGUlMjBJbnN0YWxsYXRpb24lMjBQcm9mZXNzaW9uYWwlMjBpbnN0YWxsYXRpb24lMjBvZiUyMHdhdGVyJTIwcGlwZXMufGVufDB8fDB8fHww",
    short: "Professional installation of water pipes.",
    long: "We install high-quality piping systems for residential, commercial, and industrial needs, ensuring long-lasting durability."
  },
  {
    id: 3,
    title: "Drain Cleaning",
    img: "https://media.istockphoto.com/id/2183104950/photo/unclogging-a-large-drain.webp?a=1&b=1&s=612x612&w=0&k=20&c=cqp-GdiSVvb4Nk5RKwUlmbvC5nnsSL038E9Jt2-lUgY=",
    short: "Unclogging and cleaning drains.",
    long: "Blocked drains can cause unpleasant odors and flooding. We provide effective solutions to restore proper water flow."
  },
  {
    id: 4,
    title: "Water Heater Services",
    img: "https://media.istockphoto.com/id/2186928007/photo/boiler-system-with-heat-pump-in-basement.webp?a=1&b=1&s=612x612&w=0&k=20&c=vN8FFPkraBSD9u5Ta8oPhUFucUZzJOQVow8Eirn1B9k=",
    short: "Installation & repair of water heaters.",
    long: "We install, service, and maintain electric and gas water heaters, ensuring reliable hot water supply all year round."
  },
  {
    id: 5,
    title: "Bathroom Remodeling",
    img: "https://media.istockphoto.com/id/174682991/photo/luxury-bathroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mrqd20lOJLSo964y9oBk9z18VaXhR5zfR0T64B1D2tg=",
    short: "Upgrade and redesign of bathrooms.",
    long: "From luxury fittings to complete redesigns, we help you achieve your dream bathroom with expert plumbing work."
  },
  {
    id: 6,
    title: "Kitchen Plumbing",
    img: "https://images.unsplash.com/photo-1570722288327-f999815374bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8S2l0Y2hlbiUyMFBsdW1iaW5nJTIwSW5zdGFsbGF0aW9uJTIwb2YlMjBzaW5rcyUyQyUyMGZhdWNldHMlMjAlMjYlMjBkaXNod2FzaGVycy58ZW58MHx8MHx8fDA%3D",
    short: "Installation of sinks, faucets & dishwashers.",
    long: "We handle all kitchen-related plumbing, ensuring proper water supply, drainage, and appliance installations."
  },
  {
    id: 7,
    title: "Sewer Line Services",
    img: "https://media.istockphoto.com/id/2050202050/photo/laying-new-large-diameter-water-pipes-in-the-ground-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bek6osXppW3NdDFGB0J807A-ydxZ9zCUW7byaciWb2c=",
    short: "Repair and replacement of sewer lines.",
    long: "We fix damaged sewer lines and install new systems with minimal disruption using modern trenchless technology."
  },
  {
    id: 8,
    title: "Emergency Plumbing",
    img: "https://images.unsplash.com/photo-1729537164679-65caa5d430b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RW1lcmdlbmN5JTIwUGx1bWJpbmclMjAyNCUyRjclMjBlbWVyZ2VuY3klMjBwbHVtYmluZyUyMHN1cHBvcnQufGVufDB8fDB8fHww",
    short: "24/7 emergency plumbing support.",
    long: "From burst pipes to sudden leaks, our emergency response team is available day and night to handle urgent problems."
  },
  {
    id: 9,
    title: "Faucet & Tap Repair",
    img: "https://media.istockphoto.com/id/2164348703/photo/plumbing-faucet-repair-maintenance-of-the-plumbing-faucet-at-the-sink.webp?a=1&b=1&s=612x612&w=0&k=20&c=Eqk-mzyCSJZHnv9zV8eaX4lQ5r6gdjS7QJHGIJsmtds=",
    short: "Fixing leaking and broken taps.",
    long: "We repair and replace all types of faucets and taps, saving water and improving your plumbing efficiency."
  },
  {
    id: 10,
    title: "Toilet Installation & Repair",
    img: install13,
    short: "Reliable toilet plumbing services.",
    long: "From unclogging to new installations, we ensure your toilet works efficiently and without leaks."
  },
  {
    id: 11,
    title: "Shower Installation",
    img: "https://media.istockphoto.com/id/968845340/photo/white-bathroom-in-condominium.jpg?s=612x612&w=0&k=20&c=2DQ-FFKzJVq6YnvEmqySMv_QKOgdWzCY4_kWhdI3hok=",
    short: "Modern shower installations.",
    long: "We install and maintain showers, including mixers and high-pressure systems, tailored to your needs."
  },
  {
    id: 12,
    title: "Water Filtration Systems",
    img: "https://images.unsplash.com/photo-1654220691341-be23a137bd0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdhdGVyJTIwRmlsdHJhdGlvbiUyMFN5c3RlbXMlMjBDbGVhbmVyJTIwYW5kJTIwc2FmZXIlMjB3YXRlciUyMHN1cHBseS58ZW58MHx8MHx8fDA%3D",
    short: "Cleaner and safer water supply.",
    long: "Our filtration solutions remove impurities, providing your family with safe and healthy drinking water."
  },
  {
    id: 13,
    title: "Gas Line Plumbing",
    img: "https://media.istockphoto.com/id/494539238/photo/pipes-and-faucets-in-a-boiler-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=L2grVBp4K2H5vZUB9f3CcL3mt26n6W6mxRqaoRtICtQ=",
    short: "Safe gas pipe installations.",
    long: "Certified professionals handle gas pipe fittings and repairs with strict safety standards."
  },
  {
    id: 14,
    title: "Outdoor Plumbing",
    img: "https://media.istockphoto.com/id/2188729315/photo/close-up-of-rusty-outdoor-faucet-with-green-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=I-O3QKitC8h1JK6GhAb6zdLlfknEFBl4S5eNSwzqtPo=",
    short: "Garden taps and irrigation systems.",
    long: "We install and maintain outdoor water systems for gardening, pools, and outdoor kitchens."
  },
  {
    id: 15,
    title: "Backflow Prevention",
    img: "https://media.istockphoto.com/id/623373918/photo/water-valve-plumbing-steel-on-grass-industrial-tap-water-pipe.jpg?s=612x612&w=0&k=20&c=6BbHPsnW0QDvqdlFTew5Xq3Sa1wbg9jszI4gdX-VCFw=",
    short: "Protecting water supply from contamination.",
    long: "We install and maintain backflow prevention devices to ensure safe, uncontaminated water for your home."
  }
];

const Services = () => {
  const [show, setShow] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (service) => {
    setActiveService(service);
    setShow(true);
  };

  return (
    <Container className="py-3">
      <h1 className="text-center mb-5 fw-bold ">Our Plumbing Services</h1>
      <Row xs={1} md={3} className="g-4">
        {servicesData.map((service) => (
          <Col key={service.id}>
            <Card className="shadow-lg h-100">
              <Card.Img variant="top" src={service.img} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.short}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(service)}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{activeService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={activeService?.img}
            alt={activeService?.title}
            className="img-fluid rounded mb-3"
          />
          <p>{activeService?.long}</p>
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
    </Container>
  );
};

export default Services;
