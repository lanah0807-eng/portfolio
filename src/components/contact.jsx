import "./contact.css";
import "/github.png";
import "/gmail.png";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-shell">
        <div className="contact-orb"></div>

        <p className="section-label">04 / Contact</p>
        <h2>Ready to dive deeper?</h2>
        <p>
          If you’d like to work together or just say hello, I’d love to hear
          from you.
        </p>

        <div className="contact-links">
          <a
            href="mailto:lana.h0807@gmail.com"
            className="contact-item"
          >
            <img
              src="/gmail.png"
              alt="email"
            />
            <span>lana.h0807@gmail.com</span>
          </a>

          <a
            href="https://github.com/lanah0807-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img
              src="/github.png"
              alt="github"
            />
            <span>lanah0807-eng</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;