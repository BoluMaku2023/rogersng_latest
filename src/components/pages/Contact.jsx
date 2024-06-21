import "./Contact.scss";
import Footer from "../OtherComponents/Footer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import React, { useRef, useEffect } from "react";
import ContactPage from "./ContactPage";
const Contact = () => {
  let containerr = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".a-hero-video:after");
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(containerr, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.3, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="hero-wrapper">
        <div className="flexCenter hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="c-hero-title">
              <h1>Need help? Get in touch with us.</h1>
            </div>

            <div className="flexColStart c-hero-des">
                <span>
                  You are always welcome to contact us to find out more about
                  what we can offer you. We are ready to hear about your
                  business and advise based on your needs
                </span>
            </div>
          </div>
          {/*right side*/}
        </div>
      </section>

        <section className="c-hero2-wrapper">
          <div className="arrow-container" onClick={scrollToBottom}>
            <div className="arrow-down">
              <img src="./arrow-down.png" alt="" />
            </div>
          </div>
          <div ref={(el) => (containerr = el)} className="containerr">
            <div className="a-hero-video">
              <img ref={(el) => (image = el)} src="./img37.png" alt="Contact" />
            </div>
          </div>
        </section>
      <section className="c-next-part">
        <div className="inner-next-part">
            <h1>Write to us and we will get back to you</h1>
            <ContactPage />
          {/* <div className="next-inner">
              <div className="input-left">
                <div className="input-container">
                  <span>Name</span>
                  <input
                    type="text"
                    autoComplete="off"
                    className="text-input"
                    id="username"
                  />
                </div>
                <div className="input-container">
                  <span>E-mail</span>
                  <input
                    type="text"
                    autoComplete="off"
                    className="text-input"
                    id="username"
                  />
                </div>
                <div className="input-container">
                  <span>Telephone (if we need to call you)</span>
                  <input
                    type="number"
                    autoComplete="off"
                    className="text-input"
                    id="username"
                  />
                </div>
              </div>
              <div className="input-left">
                <div className="input-container">
                  <span>Brief description of what it is about...</span>
                  <input
                    type="text"
                    autoComplete="off"
                    className="text-input-b"
                    id="username"
                  />
                </div>
                <div className="btn-send">
                  <span>SEND</span>
                  <img src="./arrow-forward-w.png" alt="" />
                </div>
              </div>
          </div> */}
        </div>
      </section>

      <div className="c-foreground">
        <div className="imagebox__image">
          <img src="./img40.png" alt="Rogers&Co." />
        </div>
        <div className="c-foreground-module__square"></div>
      </div>
      {/* <div className="div-services-c">
          <div className="serve-title-c">
            <h2>Services</h2>
          </div>
        <div className="service-con-c">
            <span>What we offer</span>
            <div>
              <img src="./line3.png" alt="" />
            </div>
            <p>
              At our company, we take pride in offering a comprehensive range of
              cutting-edge services to meet the diverse needs of our clients.
              Our software division excels in providing top-notch solutions,
              including innovative design, seamless product development, and
              robust software and hardware engineering. In the realm of
              hardware, we specialize in two vital areas: security and renewable
              energy. Our dedicated security experts employ the latest
              technologies to fortify your systems and safeguard your valuable
              data.
            </p>
        </div>
      </div> */}
      {/* <section className="c-next-info2">
        <div className="c-background-module__inner">
            <div className="become">
              <h1>Become part of the team</h1>
            </div>
          <div className="label-section">
              <div className="text-line">
                <h3>Unsolicited</h3>
                <div className="line"></div>
              </div>
            <Slide bottom>
              <div className="label-des">
                <span>
                  We currently have no job vacancies - however, we are always
                  looking for skilled and passionate colleagues. Are you
                  passionate about creating innovative solutions in
                  collaboration with our customers, and do you believe that
                  collaboration and diversity are the keys to providing the best
                  expertise, we would like to hear from you. Write to us at
                  info@rogersandco.xyz
                </span>
              </div>
            </Slide>
          </div>
        </div>
      </section> */}
      <section className="houseover">
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Contact;
