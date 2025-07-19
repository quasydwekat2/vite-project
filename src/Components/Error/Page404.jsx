import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Parallax from "parallax-js";

import "./Styles/Page404.module.less";

const Page404 = () => {
  const sceneRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    let parallaxInstance;
    if (sceneRef.current) {
      parallaxInstance = new Parallax(sceneRef.current, {
        hoverOnly: false,
      });
    }

    return () => {
      if (parallaxInstance) parallaxInstance.destroy();
    };
  }, []);

  return (
    <>
      {/* About Section */}
      <div className="about">
        <a
          className="bg_links social portfolio"
          href="https://www.rafaelalucas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"></span>
        </a>
        <a className="bg_links logo" />
      </div>

      {/* Navigation */}
      <nav>
        <div className="menu">
          <p className="website_name">LOGO</p>
          <div className="menu_links">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
            >
              about
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
            >
              projects
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
            >
              contacts
            </NavLink>
          </div>
          <div className="menu_icon">
            <span className="icon"></span>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" ref={sceneRef} data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.6">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.4">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.5" data-aos="zoom-in">
              404
            </p>
            <p className="p404" data-depth="0.1" data-aos="zoom-in" data-aos-delay="200">
              404
            </p>
          </div>

          <div className="text" data-aos="fade-up" data-aos-delay="1800">
            <article>
              <p>
                Uh oh! Looks like you got lost.
                <br />
                Go back to the homepage if you dare!
              </p>
              <button onClick={() => navigate("/")}>i dare!</button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
