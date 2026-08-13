import "./styles/About.css";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiAngular,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h2 className="about-heading">About Me</h2>
        <p className="about-intro">
          I build dependable, high-performance digital products.
        </p>
        <p className="para">
          I'm a Java full-stack developer with{" "}
          <span className="about-experience">4+ years of experience</span>{" "}
          designing, developing, testing, and deploying scalable enterprise
          applications. My work spans Java, Spring Boot, microservices, REST
          APIs, React.js, and Angular, supported by strong experience with SQL
          databases, AWS, Docker, and the complete software development
          lifecycle.
        </p>
        <div className="about-skills" aria-label="Core skills">
          <span className="skill-bubble">
            <FaJava aria-hidden="true" /> Java
          </span>
          <span className="skill-bubble">
            <SiSpringboot aria-hidden="true" /> Spring Boot
          </span>
          <span className="skill-bubble">
            <SiReact aria-hidden="true" /> React
          </span>
          <span className="skill-bubble">
            <SiAngular aria-hidden="true" /> Angular
          </span>
          <span className="skill-bubble">
            <SiNodedotjs aria-hidden="true" /> Node.js
          </span>

          <span className="skill-bubble">
            <FaAws aria-hidden="true" /> AWS
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
