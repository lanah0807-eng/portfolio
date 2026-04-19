import "./projects.css";
import { useState } from "react";

import weatherImage from "../assets/project-weather.jpg";
import giftshopImage from "../assets/project-giftshop.jpg";
import petshopImage from "../assets/project-petshop.jpg";
import adviceImage from "../assets/project-advice.jpg";
import iptrackerImage from "../assets/project-iptracker.jpg";

const projectsData = [
  {
    id: 1,
    tag: "Full Stack",
    title: "PetShop App",
    subtitle: "Pet products browsing experience",
    description:
      "A modern pet shop interface designed for smooth product discovery, clear navigation, and an intuitive shopping flow.",
    image: petshopImage,
    alt: "PetShop project preview",
  },
  {
    id: 2,
    tag: "Full Stack",
    title: "GiftShop App",
    subtitle: "Modern gift shopping experience",
    description:
      "An elegant ecommerce experience focused on clean layouts, effortless browsing, and visually engaging product presentation.",
    image: giftshopImage,
    alt: "GiftShop project preview",
  },
  {
    id: 3,
    tag: "Frontend + API",
    title: "Weather App",
    subtitle: "Real-time weather interface",
    description:
      "A responsive weather app delivering real-time data through a clean layout, smooth interactions, and clear visual hierarchy.",
    image: weatherImage,
    alt: "Weather app project preview",
  },
  {
    id: 4,
    tag: "Frontend + API",
    title: "Advice App",
    subtitle: "Random advice generator",
    description:
      "A minimal interactive app that delivers random advice through a simple, engaging interface with subtle motion and clean design.",
    image: adviceImage,
    alt: "Advice project preview",
  },
  {
    id: 5,
    tag: "Frontend + API",
    title: "IP Tracker",
    subtitle: "IP tracking and location display",
    description:
      "A location-based interface that visualizes IP data in real time, combining map integration with a clear and structured UI.",
    image: iptrackerImage,
    alt: "IP Address Tracker project preview",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [cardViews, setCardViews] = useState({});

  function handleCardClick(index) {
    const isSameCard = activeProject === index;

    setCardViews((prev) => {
      const next = {};

      if (!isSameCard) {
        next[index] = "details";
        return next;
      }

      const currentView = prev[index] || "title";

      if (currentView === "title") {
        next[index] = "details";
      } else if (currentView === "details") {
        next[index] = "image";
      } else {
        next[index] = "title";
      }

      return next;
    });

    if (!isSameCard) {
      setActiveProject(index);
      return;
    }

    const currentView = cardViews[index] || "title";

    if (currentView === "image") {
      setActiveProject(null);
    }
  }

  function getView(index) {
    if (activeProject !== index) return "title";
    return cardViews[index] || "title";
  }

  function getHint(view) {
    if (view === "title") return "Click to read more";
    if (view === "details") return "Click again to view image";
    return "Click again to close";
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <div className="projects-heading">
          <p className="section-label">01 / Projects</p>
          <h2>Things I’ve built beneath the surface</h2>
        </div>

        <div className="projects-panels">
          {projectsData.map((project, index) => {
            const isActive = activeProject === index;
            const view = getView(index);

            return (
              <article
                key={project.id}
                className={`project-panel ${isActive ? "active" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="project-panel-top">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-number">0{index + 1}</span>
                </div>

                <div key={view} className={`project-view project-view-${view}`}>
                  {view === "title" && (
                    <div className="project-view-title">
                      <h3>{project.title}</h3>
                    </div>
                  )}

                  {view === "details" && (
                    <div className="project-view-details">
                      <p className="project-subtitle">{project.subtitle}</p>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>
                  )}

                  {view === "image" && (
                    <div className="project-view-image">
                      <div className="project-image-wrap">
                        <img
                          src={project.image}
                          alt={project.alt}
                          className="project-image"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-hint-wrap">
                  <span className="project-hint">{getHint(view)}</span>
                </div>

                <div className="project-glow"></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;