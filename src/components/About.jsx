import React from "react";
import { about } from "../data/data";

export default function About() {
  return (
    <section className="about">
      <h1>{about.title}</h1>
      <h2>{about.role}</h2>
      {about.bio.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
      <blockquote>{about.quote}</blockquote>
    </section>
  );
}
