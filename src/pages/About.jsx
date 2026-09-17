import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Java",
  "Spring Boot",
  "MySQL"
];

const projects = [
  {
    title: "My E-house System",
    text: "A system for managing houses and property information.",
    tag: "WEB APP"
  },
  {
    title: "House Booking",
    text: "A simple system for finding and booking houses online.",
    tag: "UI"
  },
  {
    title: "Java Projects",
    text: "Java applications created for learning and solving practical problems.",
    tag: "JAVA"
  }
];

export default function About() {
  return (
    <section className="page about">

      <div className="inner-title">
        <p className="eyebrow">ABOUT ME</p>

        <h1>
          About <span>me.</span>
        </h1>

        <p>
          I am Marwa Said, a web developer interested in creating
          simple and useful technology solutions.
        </p>
      </div>

      <div className="about-grid">

        <div className="about-visual">
          <div className="initials">MS</div>

          <div className="floating one">REACT</div>
          <div className="floating two">JAVA</div>
          <div className="floating three">UI</div>
        </div>

        <div className="about-text">

          <p>
            I create websites and applications using modern
            frontend and backend technologies.
          </p>

          <p>
            I enjoy building projects that solve real problems
            and improving my programming skills.
          </p>

          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

        </div>

      </div>

      <div className="projects">

        <p className="eyebrow">MY PROJECTS</p>

        <h2>
          Projects I have <span>worked on.</span>
        </h2>

        <div className="project-grid">

          {projects.map((project, index) => (
            <article className="project" key={project.title}>

              <small>0{index + 1}</small>

              <h3>{project.title}</h3>

              <p>{project.text}</p>

              <b>{project.tag}</b>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}
