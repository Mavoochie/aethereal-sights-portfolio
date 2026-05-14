import React from "react";
import siteData from "../data/data.jsx";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h2>{siteData.hero.title}</h2>
        <p>{siteData.hero.subtitle}</p>
        <div className="cta-buttons">
          {siteData.hero.cta.map((btn, index) => (
            <button key={index}>{btn}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
