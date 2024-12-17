import "./portfolio.css";

import IMG1 from "../../assets/consistency.jpeg";
import IMG2 from "../../assets/Motivation.jpeg";
import IMG3 from "../../assets/process.jpeg";
import IMG4 from "../../assets/mindset.jpeg";
import IMG5 from "../../assets/present.jpeg";
import IMG6 from "../../assets/wins.png";
import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "The Power Of Consistency",
      img: IMG1,
      description:
        "Small, consistent actions can lead to big results over time. Focus on building habits that compound and improve your life gradually.",
      
    },
    {
      id: 2,
      title: "Growth Mindset",
      img: IMG4,
      description:
        "Believe that your abilities and intelligence can be developed with effort, learning, and perseverance. This mindset fosters resilience and adaptability.",
    
      
    },
    {
      id: 3,
      title: "Be Your Own Motivation",
      img: IMG2,
      description: "While external encouragement is helpful, true motivation comes from within. Develop the inner strength to push yourself forward, even when external support is lacking.",
     
    },
    {
      id: 4,
      title: "Focus on Process, Not Outcome",
      img: IMG3,
      description:
        "Instead of stressing about the end result, concentrate on the process. When you enjoy the journey, the destination becomes more meaningful..",
      
    },
    {
      id: 5,
      title: "Live in the Present",
      img: IMG5,
      description:
        " Practice mindfulness and focus on the present moment. Worrying about the past or future can distract you from making the most of today..",
     
    },
    {
      id: 6,
      title: "Celebrate Small Wins",
      img: IMG6,
      description:
        "Acknowledge your progress, no matter how small. Celebrating wins boosts your motivation and helps you stay focused on your larger goals.",
      
    },
  ];

  return (
    <section id="portfolio">
      <h5>Some familiar</h5>
      <h2>Topics</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
            </div>
            <div className="portfolio__item-cta">
             
              <a
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Topics
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
