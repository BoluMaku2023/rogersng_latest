import React from "react";
import "./Projects.css";
import "./Home.scss";
import Footer from "../OtherComponents/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef2, inView: isVisible2 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef3, inView: isVisible3 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef4, inView: isVisible4 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef5, inView: isVisible5 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef6, inView: isVisible6 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef7, inView: isVisible7 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef8, inView: isVisible8 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef9, inView: isVisible9 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef10, inView: isVisible10 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <section className="hero-wrapper">
        <div className="hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title">
              <h1>A selection of our clients</h1>
            </div>

            <div className="hero-des">
              <span>
                Over the years, we have solved a sea of ​​different challenges{" "}
                <br></br>
                in collaboration with our customers, which have produced
                noticeable results
              </span>
            </div>
          </div>
          {/*right side*/}
        </div>
      </section>
        <div className="case-link-box3">
          <div className="arrow-container-pr" onClick={goBack}>
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
        </div>
      <section className="case-section-pr">
        <div className="cases-contain-p">
            <div className="p-case-title">
              <h1>Software</h1>
            </div>
          <div className="cases-p">
            <div className="hover01 column">
              <Link
                to="/case-swish"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef} className="box">
                  <figure
                    style={{ background: "#D19820" }}
                    className={isVisible ? "animated-figure" : "figure"}
                  >
                    <img src="./case1.png" />
                  </figure>
                </div>
                  <h2 className="text-h22">
                    Brand Identity & Development & Design | Web Application
                  </h2>
                  <h3 className="text-h23">Swish</h3>
              </Link>
              <Link
                to="/case-profitable"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div className="box">
                  <figure
                    style={{ background: "#7d01d1" }}
                    className={isVisible ? "animated-figure" : "figure"}
                  >
                    <img src="./case2.png" />
                  </figure>
                </div>
                  <h2>Corporate Website | Web Application</h2>
                  <h3>Profitable</h3>
              </Link>
              <Link
                to="/case-mdatasolutions"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef2} className="box">
                  <figure
                    style={{ background: "#84969A" }}
                    className={isVisible2 ? "animated-figure" : "figure"}
                  >
                    <img src="./case3.png" />
                  </figure>
                </div>
                  <h2>Corporate website</h2>
                  <h3>MData Solutions</h3>
              </Link>

              <Link
                to="/case-yato"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef3} className="box">
                  <figure
                    style={{ background: "#9E7140" }}
                    className={isVisible3 ? "animated-figure" : "figure"}
                  >
                    <img src="./img13.png" />
                  </figure>
                </div>
                  <h2>Branding Identitiy Develepment & Design.</h2>
                  <h3>Yato</h3>
              </Link>
              <Link
                to="/case-mdocscan"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef4} className="box">
                  <figure
                    style={{ background: "#84969A" }}
                    className={isVisible3 ? "animated-figure" : "figure"}
                  >
                    <img style={{ background: "#fff" }} src="./case4.png" />
                  </figure>
                </div>
                  <h2>File Management System | Corporate Website.</h2>
                  <h3>MDocScan</h3>
              </Link>
              <div className="containing-p">
                <div className="box">
                  <figure
                    style={{ background: "#304050" }}
                    className={isVisible4 ? "animated-figure" : "figure"}
                  >
                    <img src="./img12.png" />
                  </figure>
                </div>
                  <h2>Digitization of company records.</h2>
                  <h3>Ministry of Aviation</h3>
              </div>
            </div>
          </div>

          <div className="p-case-title">
            <h1>Hardware</h1>
          </div>

          <div className="cases-p">
            <div className="hover01 column">
              <Link
                to="/case-osborne"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef5} className="box">
                  <figure
                    style={{ background: "#2D464F" }}
                    className={isVisible5 ? "animated-figure" : "figure"}
                  >
                    <img src="./case6.png" />
                  </figure>
                </div>
                  <h2>
                    Audio, Video, Lighting, Climate control and home automation.
                  </h2>
                  <h3>Osborne Towers</h3>
              </Link>
              <Link
                to="/case-ndh"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div className="box">
                  <figure
                    style={{ background: "#7d01d1" }}
                    className={isVisible5 ? "animated-figure" : "figure"}
                  >
                    <img src="./img11.png" />
                  </figure>
                </div>
                  <h2>Audiovisual Systems </h2>
                  <h3>National Defence Headquarters</h3>
              </Link>
              <Link
                to="/case-buaapapa"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef6} className="box">
                  <figure
                    style={{ background: "#84969A" }}
                    className={isVisible6 ? "animated-figure" : "figure"}
                  >
                    <img src="./img10.png" />
                  </figure>
                </div>
                  <h2>Addressable Fire Alarm System (Apapa)</h2>
                  <h3>BUA Sugar Refinery (Apapa)</h3>
              </Link>
              <Link
                to="/case-buaph"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef7} className="box">
                  <figure
                    style={{ background: "#9E7140" }}
                    className={isVisible7 ? "animated-figure" : "figure"}
                  >
                    <img src="./img9.png" />
                  </figure>
                </div>
                  <h2>Addressable Fire Alarm System.</h2>
                  <h3>BUA Sugar Refinery (P/Harcourt)</h3>
              </Link>
              <Link
                to="/case-grange"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef8} className="box">
                  <figure
                    style={{ background: "#99787F" }}
                    className={isVisible8 ? "animated-figure" : "figure"}
                  >
                    <img src="./img8.png" />
                  </figure>
                </div>
                  <h2>Smart Classroom</h2>
                  <h3>Grange School</h3>
              </Link>
              <Link
                to="/case-nycil"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div className="box">
                  <figure
                    style={{ background: "#304050" }}
                    className={isVisible8 ? "animated-figure" : "figure"}
                  >
                    <img src="./img7.png" />
                  </figure>
                </div>
                  <h2>IP Video Surveillance</h2>
                  <h3>Nycil Limited</h3>
              </Link>
              <div className="containing-p">
                <div ref={myRef9} className="box">
                  <figure
                    style={{ background: "#99787F" }}
                    className={isVisible9 ? "animated-figure" : "figure"}
                  >
                    <img src="./img5.png" />
                  </figure>
                </div>
                  <h2>Audio and Speakers Installation.</h2>
                  <h3>Altona Residence</h3>
              </div>
              <Link
                to="/case-afijiophc"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div className="box">
                  <figure
                    style={{ background: "#304050" }}
                    className={isVisible9 ? "animated-figure" : "figure"}
                  >
                    <img src="./img4.png" />
                  </figure>
                </div>
                  <h2>Solar Inverter Systems </h2>
                  <h3>Afijio PHC</h3>
              </Link>
              <Link
                to="/case-jaybion"
                className="containing-p"
                style={{ textDecoration: "none" }}
              >
                <div ref={myRef10} className="box">
                  <figure
                    style={{ background: "#304050" }}
                    className={isVisible10 ? "animated-figure" : "figure"}
                  >
                    <img src="./img6.png" />
                  </figure>
                </div>
                  <h2>IP Video Surveillance</h2>
                  <h3>Jaybion Pharmacy (P/Harcourt)</h3>
              </Link>
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

export default Projects;
