import React from "react";
import { collaborate } from "../data/data";

export default function Booking() {
  return (
    <section className="booking">
      <h1>{collaborate.title}</h1>
      <p>{collaborate.body}</p>
      <button>{collaborate.ctaLabel}</button>
    </section>
  );
}
