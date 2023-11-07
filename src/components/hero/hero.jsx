import React from "react";

import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <h1 className="hero__title">
            I am Ugiloy Bozorova, <br /> Junior Front End Developer
          </h1>
          <h5 className="hero__title">Skills</h5>
          <ul className="list">
            <li className="hero__text">
              Comprehensive knowledge of React JS platform and core principle
            </li>
            <li className="hero__text">Command over HTML, CSS and Java Script languages</li>
            <li className="hero__text">
              Command over developing REact JS components, Virtual DOM and
              workflows
            </li>
            <li className="hero__text">User interface design and development</li>
          </ul>

          <h5 className="hero__title">Experience</h5>
          <ul className="list">
            <li className="hero__text">
                1 year experience in developing UIs nd apps in React JS evelopment environment
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
