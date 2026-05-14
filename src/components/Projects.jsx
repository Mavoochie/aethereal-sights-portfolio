import React from "react";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      {projects.map((proj) => (
        <div key={proj.id} className="project-card">
          <h2>{proj.title}</h2>
          <p><strong>Location:</strong> {proj.location}</p>
          <p>{proj.description}</p>
          <p><em>{proj.theme}</em></p>
          <ul>
            {proj.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
