import "./Header.scss";
import { Link } from "react-router-dom";
import { React, useState, useRef, useEffect } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TimelineMax } from "gsap/all";
import { Expo } from "gsap";
const navLinks = [
  { title: "Projects", href: "/projects" },
  { title: "Software", href: "/software" },
  { title: "Hardware", href: "/hardware" },
  { title: "About Us", href: "/about-us" },
  { title: "Contact", href: "/contact" },
];
const Header = () => {
  const { ref: myRef, inView: isVisible } = useInView();
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  const t1 = new TimelineMax({ paused: true });
  useEffect(() => {
    t1.to(".nav-container", 1, {
      left: 0,
      ease: Expo.easeInOut,
    });
    // t1.staggerFrom(
    //   ".menu > div",
    //   0.8,
    //   { y: 100, opacity: 0, ease: Expo.easeOut },
    //   0.1,
    //   -0.4
    // );
    // t1.staggerFrom(
    //   ".socials",
    //   0.8,
    //   { y: 100, opacity: 0, ease: Expo.easeOut },
    //   "0.4",
    //   "-=0.6"
    // );
    t1.reverse();
  });
  const openClose = (e) => {
    e.preventDefault();
    t1.reversed(!t1.reversed());
  };

  return (
    <>
      <section className="header-wrapper">
        <div className="top-barr">
          <h3>
            Talk to us about a project{" "}
            <span onClick={scrollToBottom}>here</span>
          </h3>
        </div>
        <div ref={myRef} className="container">
          <div className="flexCenter innerWidth header-container">
            <div className="burger-visible" onClick={toggleMenu}>
              <div className="hamburger">
                <div className="hamburger__container">
                  <div className="hamburger__inner"></div>
                  <div className="hamburger__hidden"></div>
                </div>
              </div>
            </div>
            <Link to="/" className="top-logoo">
              <img src="./logo_black.png" alt="logo" />
            </Link>

            <div className="flexCenter header-menu">
              <Link className="link-route" to="/projects">
                Projects
              </Link>
              <Link className="link-route" to="/software">
                Software
              </Link>
              <Link className="link-route" to="/hardware">
                Hardware
              </Link>
              <Link className="link-route" to="/blog">
                Blog
              </Link>
              <Link className="link-route" to="/about-us">
                About Us
              </Link>
              <Link className="link-route" to="/contact">
                Contact
              </Link>
            </div>
            <div className="flexCenter header-infom">
              <span>
                A:1637 Ademola Adetokunbo,
                <br />
                V.I, Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="burger-visible" onClick={toggleMenu}>
        <div className="hamburger">
          <div className="hamburger__container">
            <div className="hamburger__inner"></div>
            <div className="hamburger__hidden"></div>
          </div>
        </div>
      </div> */}
      {/* <AnimatePresence>
        {open && (
          <MotionConfig
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 175,
            }}
          >
            <motion.div
              key="navbar"
              variants={{
                hide: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 175,
                    when: "afterChildren",
                  },
                },
                show: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 175,
                    staggerChildren: 0.25,
                    when: "beforeChildren",
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="new-menu"
            >
              <div className="new-menu__inner">
                <div className="w-full space-y-10">
                  <motion.ul
                    variants={{
                      hide: {
                        y: "25%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="space-y-6 list-none"
                  >
                    <li>
                      <span className="font-semibold text-2xl">Link #1</span>
                    </li>
                    <li>
                      <span className="font-semibold text-2xl">Link #2</span>
                    </li>
                    <li>
                      <span className="font-semibold text-2xl">Link #3</span>
                    </li>
                  </motion.ul>
                  <motion.div
                    variants={{
                      hide: {
                        opacity: 0,
                      },
                      show: {
                        opacity: 1,
                      },
                    }}
                    className="w-full h-px bg-white/30"
                  ></motion.div>
                  <motion.ul
                    variants={{
                      hide: {
                        y: "25%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="list-none flex gap-x-3 justify-center"
                  >
                    <li>
                      <span className="w-8 h-8 bg-white/50 block"></span>
                    </li>
                    <li>
                      <span className="w-8 h-8 bg-white/50 block"></span>
                    </li>
                    <li>
                      <span className="w-8 h-8 bg-white/50 block"></span>
                    </li>
                  </motion.ul>
                </div>
              </div>
              <div className="float-menu__dimmer"></div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence> */}
      <div className="float-menu">
        <AnimatePresence>
          {open && (
            <MotionConfig
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 175,
              }}
            >
              <motion.div
                key="navbar"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      damping: 25,
                      stiffness: 175,
                      when: "afterChildren",
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      damping: 25,
                      stiffness: 175,
                      staggerChildren: 0.25,
                      when: "beforeChildren",
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="float-menu__wrap"
              >
                <div className="float-menu__inner">
                  <div className="float-menu__bg"></div>

                  <div className="float-menu__content">
                    <div className="floating-logo">
                      <img src="./logo_black.png" alt="Rogers & Co" />
                    </div>
                    <div className="float-menu__nav">
                      <h3 className="float-menu__label">Menu</h3>

                      <motion.div
                        variants={containerVars}
                        initial="initial"
                        animate="open"
                        exit="initial"
                        className="float-menu__nav__item"
                      >
                        {navLinks.map((link, index) => {
                          return (
                            <div
                              className="overflow-hidden"
                              onClick={toggleMenu}
                            >
                              <MobileNavLink
                                key={index}
                                title={link.title}
                                href={link.href}
                              />
                            </div>
                          );
                        })}
                      </motion.div>
                    </div>
                      <div className="float-menu__social">
                        <h3 className="float-menu__label">Socials</h3>
                        <div className="flexCenter header-infom__2">
                          <ul className="list_no_decor">
                            <li className="list_no_decor">
                              <a
                                href=""
                                className="float-menu__basic_text_link"
                                target="_self"
                              >
                                Facebook
                              </a>
                            </li>
                            <li className="list_no_decor">
                              <a
                                href=""
                                className="float-menu__basic_text_link"
                              >
                                LinkedIn
                              </a>
                            </li>
                            <li className="list_no_decor">
                              <a
                                className="float-menu__basic_text_link"
                                href=""
                              >
                                Instagram
                              </a>
                            </li>
                            <li className="list_no_decor">
                              <a
                                href=""
                                className="float-menu__basic_text_link"
                              >
                                Twitter
                              </a>
                            </li>
                          </ul>

                          <div className="social_icons float-menu__social__icons">
                            <a
                              rel="noopener"
                              href="https://www.facebook.com/"
                              target="_blank"
                              aria-label="Facebook"
                              className="social-icons__icon"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <path d="M14.02293,23 L14,16 L11,16 L11,13 L14,13 L14,11 C14,8.3008 15.67151,7 18.07938,7 C19.23277,7 20.22406,7.08587 20.51294,7.12425 L20.51294,9.94507 L18.84296,9.94583 C17.53343,9.94583 17.27987,10.5681 17.27987,11.48124 L17.27987,13 L21,13 L20,16 L17.27986,16 L17.27986,23 L14.02293,23 Z"></path>
                              </svg>
                            </a>
                            <a
                              rel="noopener"
                              href="https://www.linkedin.com/"
                              target="_blank"
                              aria-label="LinkedIn"
                              className="social-icons__icon"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <path d="M11.875,23 L9,23 L9,14 L12,14 L12,23 L11.875,23 Z M10.5,12 C9.64285714,12 9,11.25 9,10.5 C9,9.64285714 9.64285714,9 10.5,9 C11.3571429,9 12,9.64285714 12,10.5 C11.8928571,11.25 11.25,12 10.5,12 Z M23,22.8734177 L20.0810811,22.8734177 L20.0810811,18.1898734 C20.0810811,17.0506329 20.0810811,15.6582278 18.6216216,15.6582278 C17.1621622,15.6582278 16.9189189,16.9240506 16.9189189,18.1898734 L16.9189189,23 L14,23 L14,13.2531646 L16.7972973,13.2531646 L16.7972973,14.5189873 C17.1621622,13.7594937 18.1351351,13 19.472973,13 C22.3918919,13 22.8783784,15.0253165 22.8783784,17.556962 L22.8783784,22.8734177 L23,22.8734177 Z"></path>
                              </svg>
                            </a>
                            <a
                              rel="noopener"
                              href="https://www.instagram.com/rogersandco_hq/"
                              target="_blank"
                              aria-label="Instagram"
                              className="social-icons__icon"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <path d="M20,13 C19.4477153,13 19,12.5522847 19,12 C19,11.4477153 19.4477153,11 20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5522847 20.5522847,13 20,13 Z M16,20 C13.794,20 12,18.206 12,16 C12,13.794 13.794,12 16,12 C18.206,12 20,13.794 20,16 C20,18.206 18.206,20 16,20 Z M16,14 C14.897,14 14,14.897 14,16 C14,17.103 14.897,18 16,18 C17.103,18 18,17.103 18,16 C18,14.897 17.103,14 16,14 Z M20,24 L12,24 C9.944,24 8,22.056 8,20 L8,12 C8,9.944 9.944,8 12,8 L20,8 C22.056,8 24,9.944 24,12 L24,20 C24,22.056 22.056,24 20,24 Z M12,10 C11.065,10 10,11.065 10,12 L10,20 C10,20.953 11.047,22 12,22 L20,22 C20.935,22 22,20.935 22,20 L22,12 C22,11.065 20.935,10 20,10 L12,10 Z"></path>
                              </svg>
                            </a>
                            <a
                              rel="noopener"
                              href="https://twitter.com/"
                              target="_blank"
                              aria-label="Twitter"
                              className="social-icons__icon"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <path d="M24,11.5 C23.4,11.8 22.8,11.9 22.1,12 C22.8,11.6 23.3,11 23.5,10.2 C22.9,10.6 22.2,10.8 21.4,11 C20.8,10.4 19.9,10 19,10 C17.3,10 15.8,11.5 15.8,13.3 C15.8,13.6 15.8,13.8 15.9,14 C13.2,13.9 10.7,12.6 9.1,10.6 C8.8,11.1 8.7,11.6 8.7,12.3 C8.7,13.4 9.3,14.4 10.2,15 C9.7,15 9.2,14.8 8.7,14.6 C8.7,14.6 8.7,14.6 8.7,14.6 C8.7,16.2 9.8,17.5 11.3,17.8 C11,17.9 10.7,17.9 10.4,17.9 C10.2,17.9 10,17.9 9.8,17.8 C10.2,19.1 11.4,20.1 12.9,20.1 C11.8,21 10.4,21.5 8.8,21.5 C8.5,21.5 8.3,21.5 8,21.5 C9.5,22.4 11.2,23 13,23 C19,23 22.3,18 22.3,13.7 C22.3,13.6 22.3,13.4 22.3,13.3 C23,12.8 23.6,12.2 24,11.5 Z"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    <div className="float-menu__address">
                      <h3 className="float-menu__label float-menu__label--third">
                        Contact
                      </h3>
                        <div className="flexCenter header-infom__2">
                          <span className="float-menu__basic_text">
                            <u>
                              E:info@rogersandco.xyz
                              <br />
                              T: +234(0)8169169966
                            </u>
                          </span>
                          <span className="float-menu__basic_text">
                            A:1637 Ademola Adetokunbo,
                            <br />
                            V.I, Lagos, Nigeria
                          </span>
                          <div className="float-logo">
                            <img src="./logo_black.png" alt="Rogers & Co" />
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <span className="float-menu__dimmer"></span>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="float-menu__nav__item__link__text"
    >
      <Link to={href}>{title}</Link>
    </motion.div>
  );
};
