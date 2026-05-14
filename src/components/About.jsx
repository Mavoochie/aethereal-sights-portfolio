import React from "react";
import { about } from "../data/data";

export default function About() {
  return (
    <section className="about section container">
      <h1>{about.title}</h1>
      <h2>{about.role}</h2>
      <div className="about__bio">
        {about.bio.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <blockquote className="about__quote">{about.quote}</blockquote>
    </section>
  );
}
