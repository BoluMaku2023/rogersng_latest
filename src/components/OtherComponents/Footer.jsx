import React from "react";
import "./Footer.scss";
import "../pages/Software.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ContactForm from "../pages/ContactForm";
const Footer = () => {
  return (
    <section>
      <div className="container-stacked">
        <div className="top">
          <div className="top-title">
            <h2>Let's Have a Chat</h2>
          </div>

          <div className="footer-divs">
            <p>
              Got a project you would love to discuss? Reach out to us today.
            </p>
            <ContactForm />

            <div className="footer-logo">
              <img src="./logowhite2.png" alt="" />
            </div>
            <div className="copyright-mobile">
              <span>follow us --------{">"}.</span>
              <div className="social-icons-mobile">
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://www.instagram.com/rogersandco_hq/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-nav">
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <div className="navv">
                <div className="bot-line"></div>
                <h2>Projects</h2>
                <span>
                  Solutions we are proud to <br />
                  be a part of
                </span>
              </div>
            </Link>

            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <div className="navv">
                <div className="bot-line"></div>
                <h2>About Us</h2>
                <span>
                  Collaboration across <br />
                  professional competencies
                </span>
              </div>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <div className="navv ">
                <div className="bot-line"></div>
                <h2>Contact</h2>
                <span>
                  Come by for a <br />
                  cup of coffee
                </span>
              </div>
            </Link>
          </div>
          <div className="copyright">
            <span>All rights reserved 2023 © Rogers & Co.</span>
          </div>
          <div className="copyright-social flexEnd">
            <span>follow us --------{">"}.</span>
            <div className="social-icons-mobile">
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.instagram.com/rogersandco_hq/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
