import { siteInfo, navLinks } from "../data/data";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <p className="footer__brand-name">{siteInfo.name}</p>
            <p className="footer__brand-role">{siteInfo.tagline}</p>
            <p className="footer__brand-bio">
              A visual storytelling studio rooted in the belief that reality
              extends beyond what is seen.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <p className="footer__col-title">Navigate</p>
            <nav className="footer__nav">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.href} className="footer__nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <p className="footer__col-title">Reach Out</p>
            <div className="footer__contact">
              <div className="footer__contact-item">✦ {siteInfo.contact.instagram}</div>
              <div className="footer__contact-item">◎ {siteInfo.contact.phone}</div>
              <div className="footer__contact-item">◈ {siteInfo.contact.location}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {siteInfo.name} · {siteInfo.founderShort} · All rights reserved.
          </p>
          <span className="footer__film-strip">▐██▌▐██▌▐██▌▐██▌▐██▌▐██▌</span>
          <p className="footer__tagline">ÆTHEREAL SIGHTS - Designing Realities</p>
        </div>
      </div>
    </footer>
  );
}
