const techLogos = [
  { src: "/images/java.png", alt: "Java" },
  { src: "/images/springboot.png", alt: "Spring Boot" },
  { src: "/images/react%20(1).png", alt: "React" },
  { src: "/images/Angular%20(1).png", alt: "Angular" },
  { src: "/images/javascript.webp", alt: "JavaScript" },
  { src: "/images/typescript.webp", alt: "TypeScript" },
  { src: "/images/node2.webp", alt: "Node.js" },
  { src: "/images/express.webp", alt: "Express" },
  { src: "/images/mongo.webp", alt: "MongoDB" },
  { src: "/images/mysql.webp", alt: "MySQL" },
  { src: "/images/postgres.png", alt: "PostgreSQL" },
  { src: "/images/docker-bubble.svg", alt: "Docker" },
  { src: "/images/aws%20(1).png", alt: "AWS" },
  { src: "/images/next2.webp", alt: "Next.js" },
];

const TechStackMobile = () => {
  return (
    <section className="techstack-mobile" id="techstack" aria-label="Tech stack">
      <h2>My Tech Stack</h2>
      <div className="techstack-grid">
        {techLogos.map((logo) => (
          <div className="techstack-item" key={logo.alt}>
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackMobile;
