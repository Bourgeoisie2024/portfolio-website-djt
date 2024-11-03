import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>🔭 I’m currently working on Projects in React</p>
          <p>🌱 I’m currently learning more about React & Tailwind CSS</p>
          <p>💬 Ask me about - Web & Mobile Application Development</p>
          <p>📫 How to reach me - alameenolawalebakare@gmail.com</p>
          <p>⚡ Fun facts: I am a student of Djtconcept Academy</p>
        </div>
        <div className="about-image">
          <img
            src="https://camo.githubusercontent.com/d39449ec788a3055ac750f8a846dc7acfed31bd0186bab6d533df2b4a54257b0/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313136323037372f73637265656e73686f74732f333834383931342f6d656469612f33323039383461396361353862336337333237346339323539656366366465382e676966"
            alt="Coding Animation"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
