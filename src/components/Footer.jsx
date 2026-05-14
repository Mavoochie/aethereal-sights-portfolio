
import { siteInfo, navLinks, about } from "../data/data";
// Styles are in src/styles/styles.css — imported once in App.jsx

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Top grid: Brand | Nav | Contact */}
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
                <a key={link.label} href={link.href} className="footer__nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <p className="footer__col-title">Reach Out</p>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <span className="footer__contact-icon">✦</span>
                <span className="footer__contact-text">{siteInfo.contact.instagram}</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">◎</span>
                <span className="footer__contact-text">{siteInfo.contact.phone}</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">◈</span>
                <span className="footer__contact-text">{siteInfo.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {siteInfo.name} · {siteInfo.founderShort} · All rights reserved.
          </p>
          <span className="footer__film-strip">
            ▐██▌▐██▌▐██▌▐██▌▐██▌▐██▌
          </span>
        </div>

      </div>
    </footer>
  );
}