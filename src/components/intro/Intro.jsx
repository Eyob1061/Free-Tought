import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/pinki-logo.png'



const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Free Thought </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Logo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Intro</h5>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Ideas</h5>
            </article>
          </div>
          <p>
          Thank you for visiting Free Thoughts. We believe that every idea, question, and perspective is valuable.
           Our platform is dedicated to providing you with a space where you can freely share your thoughts, ask questions, 
           and explore a wide range of topics—without any concerns.
           Whether you’re looking to discuss an idea, seek advice, or simply want to share your reflections, 
           we encourage you to express yourself fully. You can write about anything that interests you, and rest assured, 
           we will respond with thoughtful feedback within 24 hours.


          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
