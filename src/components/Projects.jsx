import React from "react";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section className="projects section container">
      <h1>Projects</h1>
      {projects.map((proj) => (
        <div key={proj.id} className="project-card">
          <h2>{proj.title}</h2>
          <p className="project-card__location">{proj.location}</p>
          <p>{proj.description}</p>
          <p className="project-card__theme">{proj.theme}</p>
          <ul className="project-card__tags">
            {proj.tags.map((tag) => (
              <li key={tag} className="project-card__tag">{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
