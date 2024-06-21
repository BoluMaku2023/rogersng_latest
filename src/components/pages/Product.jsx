import React, { useEffect } from "react";
import "./Product.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
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
              <h1>Product Development</h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                At Rogers & Co, our Software Product Development department sets
                the standard for excellence in the industry. Our team of expert
                developers and designers are dedicated to creating cutting-edge
                products that solve real-world problems and drive business
                success. With a focus on user-centered design and the latest
                technology, we deliver solutions that not only meet, but exceed
                expectations. Our commitment to innovation and attention to
                detail ensures that each project is delivered on time, on
                budget, and with a level of quality that sets us apart. Whether
                you’re looking to bring a new product to market or enhance an
                existing one, our team has the skills, experience, and passion
                to bring your vision to life.
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
          <img src="./img20.png" alt="Software" />
        </div>
      </section>
      <section className="next-part">
        <div className="next-div">
            <span>UX Design</span>
            <p>
              Our UX design process starts with thorough research to understand
              user behaviour and requirements. We then use that information to
              create wireframes, prototypes, and user flows to ensure that your
              product is both functional and enjoyable to use{" "}
            </p>
          <div ref={myRef} className="box">
            <div
              style={{ background: "#6ab3a6" }}
              className={isVisible ? "animated-img" : "next-img"}
            >
              <img src="./img21.png" alt="" />
            </div>
          </div>

            <span>Related Cases</span>
        </div>
      </section>
        <section className="case-section">
          <div className="cases">
            <div className="case-container">
              <div className="case">
                <img src="./case1.png" alt="" />
                <h2>Brand Identity & Development & Design | Web Application</h2>
                <h3>Swish</h3>
              </div>
              <div className="case">
                <img src="./case2.png" alt="" />
                <h2>Corporate Website | Web Application</h2>
                <h3>Profitable</h3>
              </div>
              <div className="case">
                <img src="./case3.png" alt="" />
                <h2>Corporate website</h2>
                <h3>MData Solutions</h3>
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

export default Product;
