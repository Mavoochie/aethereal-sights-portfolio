
import { useState, useEffect } from "react";
import { navLinks, siteInfo } from "../data/data";
// Styles are in src/styles/styles.css — imported once in App.jsx

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add 'scrolled' class when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar__inner">

          {/* Logo */}
          <a href="#home" className="navbar__logo">
            <span className="navbar__logo-name">{siteInfo.name}</span>
            <span className="navbar__logo-sub">{siteInfo.tagline}</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#collaborate" className="navbar__cta">
            Let's Work
          </a>

          {/* Hamburger button (mobile) */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}