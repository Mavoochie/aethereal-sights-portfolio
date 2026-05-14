import React from "react";
import { creativeFocus } from "../data/data";

export default function Services() {
  return (
    <section className="services section container">
      <h1>{creativeFocus.title}</h1>
      <h2>{creativeFocus.subtitle}</h2>
      <ul>
        {creativeFocus.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
