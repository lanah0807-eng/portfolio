import "./experience.css";
import { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    year: "2025",
    title: "Frontend Projects",
    text: "Building interfaces and refining layout systems.",
  },
  {
    year: "2026",
    title: "Concept-driven UI",
    text: "Moving toward more immersive visual storytelling.",
  },
  {
    year: "Now",
    title: "Portfolio Direction",
    text: "Combining code, motion, and strong visual identity.",
  },
];

function Experience() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.28 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`experience-section ${visible ? "is-visible" : ""}`}
      id="experience"
      ref={sectionRef}
    >
      <div className="experience-inner">
        <div className="experience-heading">
          <p className="section-label">03 / Experience</p>
          <h2>My path through the water</h2>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line">
            <span className="timeline-progress"></span>
          </div>

          <div className="timeline-dots">
            {experienceData.map((_, index) => (
              <span
                key={index}
                className="timeline-dot"
                style={{ transitionDelay: `${0.2 + index * 0.18}s` }}
              ></span>
            ))}
          </div>

          <div className="experience-points">
            {experienceData.map((item, index) => (
              <article
                key={item.title}
                className={`exp-point exp-point-${index + 1}`}
                style={{ transitionDelay: `${0.25 + index * 0.18}s` }}
              >
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;