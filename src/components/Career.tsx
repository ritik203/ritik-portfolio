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
                <h4>Persistent Systems</h4>
                <div className="career-company-date">
                  <h5>Software Engineer</h5>
                  <span className="career-date">Feb 2022 - Feb 2023</span>
                </div>
              </div>
            </div>
            <p>
              Developed enterprise-grade applications using Java and Spring Boot
              with RESTful APIs. Integrated APIs with Angular-based UIs.
              Implemented unit and integration tests using JUnit and Postman.
              Worked with Git, Jenkins, and Docker for CI/CD pipelines.
              Participated in Agile ceremonies and reduced ticket resolution
              time by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>eClerx</h4>
                <div className="career-company-date">
                  <h5>Analyst</h5>
                  <span className="career-date">Sep 2023 - Jan 2024</span>
                </div>
              </div>
            </div>
            <p>
              Assisted in customer relationship management and issue resolution
              across digital operations. Streamlined workflow processes,
              improving client response time by 15%. Analyzed large datasets
              using Excel and SQL. Automated processes using Python scripts,
              reducing manual effort by 25%. Supported UAT and documented SOPs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mindtack Software Pvt Ltd</h4>
                <div className="career-company-date">
                  <h5>Full Stack Developer</h5>
                  <span className="career-date">Jun 2025 - Feb 2026</span>
                </div>
              </div>
            </div>
            <p>
              Developed React Native mobile app (Expert & Patient App) using
              TypeScript and Tailwind CSS. Integrated Zoom SDK for video
              consultations. Built scalable backend with Node.js, Express.js,
              Prisma ORM, and PostgreSQL. Designed microservices using AWS
              Lambda, SQS, and SES. Created CMS using React.js, Vite, and AWS S3
              storage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Centra Logic</h4>
                <div className="career-company-date">
                  <h5>Full Stack Developer</h5>
                  <span className="career-date">Mar 2026 - Present</span>
                </div>
              </div>
            </div>
            <p>
              Developing frontend applications using React.js with TypeScript.
              Building scalable backend services using Node.js and GraphQL.
              Collaborating with cross-functional teams to deliver end-to-end
              features. Implementing best practices for code quality and
              optimizing application performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
