
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-light pt-2 mt-5 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #0d6efd, #6610f2, #20c997)",
      }}
    >
      <div className="container">

        <div className="row pb-4 border-bottom border-light align-items-center">
          <div className="col-md-6 mb-3">
            <h4 className="fw-bold text-warning">Nex Pipe Tech</h4>
            <p className="small text-light m-0 opacity-75">
              Innovating pipelines for a sustainable future.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="row pt-4 pb-5 border-bottom border-light">
          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-warning">📍 Contact Us</h6>
            <p className="small lh-lg">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+254758849440"
                className="text-light text-decoration-none"
              >
                0758 849 440
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@nexpipetech.com"
                className="text-light text-decoration-none"
              >
                adichronix255@gmail.com
              </a>
              <br />
              <strong>Location:</strong> Wangige – Kabete, Kenya
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-warning">🔗 Quick Links</h6>
            <ul className="list-unstyled">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.path}
                    className="text-light text-decoration-none"
                    style={{ transition: "color 0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#ffc107")}
                    onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-warning">📬 Stay Updated</h6>
            <form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
                required
              />
              <button className="btn btn-light text-dark fw-bold">
                Subscribe
              </button>
            </form>
            <p className="small text-light opacity-75">
              Join our newsletter for the latest updates.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="text-center text-light py-3 small opacity-75">
          &copy; {new Date().getFullYear()}{" "}
          <strong className="text-light">Nex Pipe Tech</strong>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
