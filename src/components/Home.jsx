import React from "react";
import siteData from "../data/data.jsx";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>See Beyond the Visible, Design a reality.</h1>
        <p>Cinematic storytelling through film, photography, and symbolic art.</p>
        <div className="cta-buttons">
          <button>View Work</button>
          <button>Book a Session</button>
        </div>
      </div>

      <div className="intro">
        <p>
          ÆTHEREAL SIGHTS is a creative studio dedicated to capturing what lies beneath the surface.
          We create visuals that are not only seen—but felt.
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