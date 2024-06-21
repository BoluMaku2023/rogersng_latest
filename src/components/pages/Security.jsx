import React, { useEffect } from "react";
import "./Product.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { useNavigate } from "react-router-dom";

const Security = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title">
              <h1>Security & Surveillance</h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                (CCTV, Access Control, Smoke Detectors - [fire detection and
                alarm system, fire fighting system e.g fm200] Remote Gate -
                (access control & automatic gare control), Solar Systems
              </span>
            </div>
          </div>
          {/*right side*/}
        </div>
      </section>
      <section className="hero2-wrapper-new">
          <div className="arrow-container" onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
            >
              <path
                d="M23 7.21741V38.7826"
                stroke="black"
                stroke-width="2.17284"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0869 25.8696L23 38.7826L35.913 25.8696"
                stroke="black"
                stroke-width="2.17284"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        <div className="a-hero-video">
          <img src="./img33.png" alt="Wireless" />
        </div>
      </section>
      <section className="next-part">
        <div className="next-div">
            <span>IP Surveillance (CCTV) </span>
            <p>
              Our advanced IP Surveillance solutions provide comprehensive
              security and monitoring for your business or residential spaces.
              Utilizing state-of-the-art CCTV cameras and advanced network
              technology, we offer high-resolution video surveillance systems
              that enable real-time monitoring and recording of critical areas.
              With our IP Surveillance systems, you can enhance the safety and
              security of your premises, deter potential threats, and have peace
              of mind knowing that your property is protected.
            </p>
            <div className="next-img">
              <img src="./img32.png" alt="" />
            </div>
            <span>RFID & Biometric Access Control </span>
            <p>
              Our RFID and Biometric Access Control systems provide robust
              security measures to safeguard your premises and control access to
              sensitive areas. With advanced RFID technology and biometric
              authentication methods such as fingerprint or facial recognition,
              we offer secure and efficient access control solutions tailored to
              your specific requirements. Our systems enable you to manage
              employee access, track visitor movements, and maintain a secure
              environment while ensuring ease of use and convenience.
            </p>
            <div className="next-img">
              <img src="./img31.png" alt="" />
            </div>
            <span>Fire Alarm Systems </span>
            <p>
              Protecting your property and ensuring the safety of occupants is
              of paramount importance. Our Fire Alarm Systems are designed to
              detect and alert against the threat of fire, providing early
              warning signals to minimize potential damage and protect lives.
              Our comprehensive fire alarm solutions include intelligent
              sensors, control panels, and audible/visual alarms that are
              integrated with your building’s infrastructure to provide
              efficient and reliable fire detection and notification.
            </p>
            <div className="next-img">
              <img src="./img34.png" alt="" />
            </div>
            <span>Related Cases</span>
        </div>
      </section>
        <section className="case-section">
          <div className="cases">
            <div className="case-container">
              <div className="case">
                <img src="./img12.png" alt="" />
                <h2>Audiovisual Systems </h2>
                <h3>National Defence Headquarters</h3>
              </div>
              <div className="case">
                <img src="./img10.png" alt="" />
                <h2>Addressable Fire Alarm System </h2>
                <h3>BUA Sugar Refinery (Portharcourt)</h3>
              </div>
              <div className="case">
                <img src="./img7.png" alt="" />
                <h2>IP Video Surveillance</h2>
                <h3>Nycil Limited</h3>
              </div>
            </div>
          </div>
        </section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Security;
