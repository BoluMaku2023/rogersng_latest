import React, { useEffect } from "react";
import "./Design.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { useNavigate } from "react-router-dom";

const Design = () => {
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
              <h1>Design</h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                The Rogers & Co. design team is dedicated to re-imagining how
                brands, businesses and organizations are perceived. We
                specialize in bringing digital identities into the real world.
                While very diverse, our aesthetic approach often involves a
                distinct sense of style and design, aiming to combine
                out-of-the-box design with functionality. Strategically, our
                work aims to elevate brand offerings by distilling core
                messaging down to its clearest and freshest visual form.
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
          <img src="./img17.png" alt="Software" />
        </div>
      </section>
      <section className="next-part">
        <div className="next-div">
            <span>Brand Identity Development</span>
            <p>
              We have proven experience in creating unique and memorable brand
              identities that effectively convey a company’s values and goals.
              From logos and colour schemes to typography and imagery, we work
              with clients to develop a visual representation of their brand
              that sets them apart from the competition.
            </p>
            <div className="next-img">
              <img src="./img18.png" alt="" />
            </div>
            <span>User Interface (UI) Design</span>
            <p>
              Our UI design services focus on creating intuitive and visually
              appealing interfaces that provide an excellent user experience.
              Our designers take the time to understand your target audience and
              design with their needs and preferences in mind.
            </p>
            <div className="next-img">
              <img src="./img19.png" alt="" />
            </div>
            <span>Related Cases</span>
        </div>
      </section>
        <section className="case-section">
          <div className="cases">
            <div className="case-container">
              <div className="case">
                <img src="./case3.png" alt="" />
                <h2>Corporate Website for Managed Data Solutions</h2>
                <h3>MData Solutions</h3>
              </div>
              <div className="case">
                <img src="./case2.png" alt="" />
                <h2>Corporate Website | Web Application</h2>
                <h3>Profitable</h3>
              </div>
              <div className="case">
                <img src="./case4.png" alt="" />
                <h2>File Management System | Corporate Website.</h2>
                <h3>MDocScan</h3>
              </div>
            </div>
          </div>
        </section>
      <section className="houseover">
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Design;
