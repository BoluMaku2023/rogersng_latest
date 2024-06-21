import React, { useRef, useEffect } from "react";
import "./Design.css";
import Footer from "../OtherComponents/Footer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import { useNavigate } from "react-router-dom";
const SoftwareDev = () => {
  let containerr = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".a-hero-video:after");
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(containerr, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.3, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
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
              <h1>Software Development</h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                At Rogers & Co, our Software Development team is composed of
                highly skilled and knowledgeable professionals who are dedicated
                to delivering innovative software solutions. Our process is
                guided by Agile methodologies, such as Scrum and Kanban, to
                ensure flexibility and responsiveness in response to the
                ever-changing needs of our clients.
              </span>
              <span>
                Our developers have expertise in a variety of programming
                languages, they also have experience working with both SQL and
                NoSQL databases, as well as cloud platforms such as AWS and
                Microsoft Azure. With a focus on user-centered design, we ensure
                that each solution is not only technically sound, but also easy
                to use and understand. Our rigorous quality assurance process,
                including automated and manual testing, guarantees that each
                project meets the highest standards of excellence.
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
          <img src="./img22.png" alt="Software" />
        </div>
      </section>
      <section className="next-part">
        <div className="next-div">
            <span>Web Development</span>
            <p>
              Our web development services cover all aspects of creating and
              maintaining a website, from planning and design to development and
              deployment. We use the latest technologies and best practices to
              build websites that are both fast and responsive, ensuring an
              optimal user experience.
            </p>
            <div className="next-img">
              <img src="./img41.png" alt="" />
            </div>
            <span>Web App Development</span>
            <p>
              We build web based applications that help businesses and
              organizations take advantage of the web’s potential to reach and
              engage users. We build custom web apps that meet specific business
              needs and integrate seamlessly with existing systems and
              processes.
            </p>
            <div className="next-img">
              <img src="./img19.png" alt="" />
            </div>
            <span>Mobile Development</span>
            <p>
              We build both native and cross-platform mobile applications for
              iOS and Android. We create mobile apps that provide an excellent
              user experience, are fast and responsive, and are optimized for
              each platform’s unique requirements.
            </p>
            <div className="next-img">
              <img src="./img24.png" alt="" />
            </div>
            <span>Front-End Development</span>
            <p>
              Our front-end developers are experts in creating user-friendly and
              visually stunning interfaces that bring your website or web app to
              life. We use the latest front-end technologies and techniques to
              build interfaces that are fast, responsive, and accessible to all
              users.
            </p>
            <div className="next-img">
              <img src="./img25.png" alt="" />
            </div>
            <span>Back-End Development</span>
            <p>
              Our back-end development team covers everything from server-side
              scripting and database development to API creation and
              integration. Our developers have a deep understanding of the
              technologies and best practices required to create scalable and
              secure back-end systems
            </p>
            <div className="next-img">
              <img src="./img26.png" alt="" />
            </div>
            <span>Native iOS/Android Development</span>
            <p>
              Our native apps for iOS and Android provide a truly native
              experience for users, with full access to the platform’s features
              and capabilities. We work with you to create apps that meet your
              specific business requirements and take advantage of the unique
              features of each platform.
            </p>
            <div className="next-img">
              <img src="./img27.png" alt="" />
            </div>
            <span>Cross-Platform Development</span>
            <p>
              Our cross-platform development services help businesses and
              organizations reach users on multiple platforms with a single
              codebase. We use cross-platform technologies to create apps that
              are fast, responsive, and provide a consistent user experience
              across all platforms.
            </p>
            <div className="next-img">
              <img src="./img28.png" alt="" />
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default SoftwareDev;
