import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Centralogic Pvt. Ltd.</h4>
                <div className="career-company-date">
                  <h5>Software Engineer</h5>
                  <span className="career-date">Mar 2026 - Present</span>
                </div>
              </div>
            </div>
            <p>
              Design and develop scalable REST APIs and backend services using
              Node.js, Express.js, and Spring Boot. Build backend modules with
              PostgreSQL and optimize SQL queries, improving API performance by
              35%. Integrate React.js frontends with backend services using REST
              APIs and Axios, maintain modular architecture, and collaborate in
              Agile sprints with testing, deployment, and production support.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SmartMatrix Digital Services Pvt. Ltd.</h4>
                <div className="career-company-date">
                  <h5>Software Engineer (Full Stack)</h5>
                  <span className="career-date">Apr 2023 - Mar 2026</span>
                </div>
              </div>
            </div>
            <p>
              Developed enterprise web applications using React.js, Node.js,
              Express.js, and JavaScript. Built reusable React components with
              Hooks, Redux, and Context API, and designed backend APIs with
              optimized PostgreSQL and MongoDB queries. Implemented
              authentication, authorization, and role-based access control while
              collaborating with Agile teams on delivery, testing, and
              production support.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Persistent Systems</h4>
                <div className="career-company-date">
                  <h5>Software Engineer</h5>
                  <span className="career-date">Feb 2022 - Feb 2023</span>
                </div>
              </div>
            </div>
            <p>
              Developed responsive web applications using React.js, JavaScript,
              HTML5, and CSS3. Integrated frontend apps with backend REST APIs
              and Node.js services, implemented reusable UI components with
              client-side validation, and improved user experience by
              approximately 40% through UI optimization. Supported testing,
              debugging, deployment, and production issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
