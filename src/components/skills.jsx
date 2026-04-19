import "./skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner">
        <div className="skills-text">
          <p className="section-label">02 / Skills</p>
          <h2>Tools that move with the current</h2>
          <p>
            A mix of design sensitivity and frontend precision, with a strong
            focus on polished interfaces.
          </p>
        </div>

        <div className="skills-bubbles">
          <div className="skill-bubble big">React</div>
          <div className="skill-bubble mid">JavaScript</div>
          <div className="skill-bubble small">TypeScript</div>
          <div className="skill-bubble mid">CSS</div>
          <div className="skill-bubble small">Responsive UI</div>
          <div className="skill-bubble big">Frontend Design</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

