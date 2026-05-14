import React from "react";
import { siteData } from "../data/data";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>{siteData.hero.title}</h1>
        <p>{siteData.hero.subtitle}</p>
        <div className="cta-buttons">
          {siteData.hero.cta.map((btn) => (
            <button key={btn}>{btn}</button>
          ))}
        </div>
      </div>

      <div className="intro">
        <p>
          ÆTHEREAL SIGHTS is a creative studio dedicated to capturing what lies beneath the surface.
          We create visuals that are not only seen but felt.
        </p>
      </div>

      <div className="highlights">
        <ul>
          <li>Portfolio</li>
          <li>Projects</li>
          <li>The Atelier</li>
          <li>Cinema</li>
        </ul>
      </div>
    </section>
  );
}
