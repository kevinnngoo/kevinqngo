import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Linux",
  "Pandas",
];

const labelsThird = [
  "Python",
  "Pandas",
  "scikit-learn",
  "Matplotlib",
  "OpenAI",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* Frontend & Backend */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend & Backend Development</h3>
            <p>
              I work primarily with Python and JavaScript to build full-stack
              applications. I'm comfortable using tools like React, Flask, and
              PostgreSQL to create responsive interfaces and connected backend
              services.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Tools & Ecosystem */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Development Tools & Ecosystem</h3>
            <p>
              I use Git and GitHub daily for version control, and I'm familiar
              with tools like Postman, Linux, and VS Code for streamlining the
              development workflow. I'm also beginning to explore cloud
              platforms like AWS and container tools like Docker.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Python & AI Interests */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Python & AI Exploration</h3>
            <p>
              Python is my strongest language. I've used it for scripting, basic
              automation, and learning the fundamentals of AI. I'm currently
              exploring AI-related tools like Hugging Face, LangChain, and
              Streamlit to expand my knowledge in this fast-moving space.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
