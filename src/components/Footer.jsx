// src/components/Footer.jsx
import React from "react";
import siteData from "../data";

function Footer() {
  return (
    <footer className="footer">
      <p>{siteData.footer.tagline}</p>
      <p>Contact: {siteData.contact.phone} | {siteData.contact.email}</p>
      <p>Instagram: {siteData.contact.instagram}</p>
    </footer>
  );
}

export default Footer;
