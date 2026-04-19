import "./intro.css";
import boatImg from "../assets/boat.png";

function Intro() {
  return (
    <section className="intro-section">
      <div className="hero-top">
        <div className="big-name-wrap">
          <h1 className="big-name">LANA HUSSISSI</h1>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            <span>dive in with me</span>
            <span>↓</span>
            <span>dive in with me</span>
            <span>↓</span>
            <span>dive in with me</span>
            <span>↓</span>
            <span>dive in with me</span>
            <span>↓</span>
            <span>dive in with me</span>
            <span>↓</span>
            <span>dive in with me</span>
            <span>↓</span>
          </div>
        </div>

        <div className="intro-divider"></div>
      </div>

      <div className="intro-panel">
        <div className="intro-content">
          <div className="text-side">
            <p className="intro-kicker">Hi, I’m Lana</p>
            <h2 className="role-script">Full Stack Engineer</h2>
            <p className="role-desc">
              I build clean, modern web experiences with thoughtful design and
              solid development.
            </p>

            <a href="#projects" className="intro-link">
              Explore below
            </a>
          </div>

          <img src={boatImg} alt="Boat" className="boat-image" />
        </div>
      </div>
    </section>
  );
}

export default Intro;