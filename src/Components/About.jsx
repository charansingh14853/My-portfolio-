/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "I am a passionate B.Tech graduate from Presidency University, Bengaluru, specializing in Artificial Intelligence and Machine Learning. I love working on impactful AI/ML projects that drive innovation and solve real-world challenges.";

/**
 * List of some skills or technologies you work on, are learning,
 * passionate about, or enjoy.
 */
const skillsList = [
  "Python",
  "HTML & CSS",
  "MySQL",
  "Data Analysis",
  "Robotic Process Automation (RPA)",
  "Web Design",
  "Java script",
];

/**
 * Additional details about your passion, work style, or a professional quote.
 */
const detailOrQuote =
  "I believe in leveraging AI/ML technologies to solve complex problems and contribute to projects that make a meaningful impact. I continually strive for innovation and collaboration in a dynamic tech environment.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
