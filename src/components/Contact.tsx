import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import {
  MdArrowOutward,
  MdCheck,
  MdContentCopy,
  MdEmail,
  MdOutlineWorkOutline,
  MdSchool,
  MdLocationOn,
} from "react-icons/md";
import "./styles/Contact.css";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/ritik203",
    icon: FaGithub,
    handle: "@ritik203",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ritik-waghamare-51706b170/",
    icon: FaLinkedinIn,
    handle: "ritik-waghamare",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ritik_w_22",
    icon: FaInstagram,
    handle: "@ritik_w_22",
  },
] as const;

const EMAIL = "ritikwaghamare@gmail.com";

const Contact = () => {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-bg" aria-hidden="true">
        <span className="contact-orb contact-orb-1" />
        <span className="contact-orb contact-orb-2" />
        <span className="contact-grid-lines" />
      </div>

      <div className="contact-container">
        <header className="contact-header">
          <div className="contact-header-copy">
            <p className="contact-eyebrow">
              <span className="contact-status-dot" aria-hidden="true" />
              Available for work
            </p>
            <h2 className="contact-title">
              Let&apos;s create something <em>exceptional</em>
            </h2>
            <p className="contact-lead">
              Whether it&apos;s a full-time role, freelance build, or a quick
              collab — drop a line and let&apos;s talk.
            </p>
          </div>

          <div className="contact-header-cta">
            <a
              className="contact-btn contact-btn-primary"
              href={`mailto:${EMAIL}`}
              data-cursor="disable"
            >
              <MdEmail aria-hidden="true" />
              Say hello
              <MdArrowOutward aria-hidden="true" />
            </a>
            <button
              type="button"
              className="contact-btn contact-btn-ghost"
              onClick={copyEmail}
              data-cursor="disable"
            >
              {copied ? <MdCheck aria-hidden="true" /> : <MdContentCopy aria-hidden="true" />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </header>

        <div className="contact-bento">
          <a
            className="contact-tile contact-tile-email"
            href={`mailto:${EMAIL}`}
            data-cursor="disable"
          >
            <div className="contact-tile-corners" aria-hidden="true" />
            <div className="contact-tile-head">
              <span className="contact-tile-icon">
                <MdEmail />
              </span>
              <span className="contact-tile-badge">Primary</span>
            </div>
            <p className="contact-tile-label">Email</p>
            <p className="contact-tile-value">{EMAIL}</p>
            <p className="contact-tile-hint">
              Replies within 24 hours
              <MdArrowOutward aria-hidden="true" />
            </p>
          </a>

          <article className="contact-tile contact-tile-info">
            <p className="contact-tile-label">Profile</p>
            <ul className="contact-info-list">
              <li>
                <span className="contact-info-icon">
                  <MdLocationOn aria-hidden="true" />
                </span>
                <div>
                  <small>Location</small>
                  <strong>Pune, India</strong>
                </div>
              </li>
              <li>
                <span className="contact-info-icon">
                  <MdSchool aria-hidden="true" />
                </span>
                <div>
                  <small>Education</small>
                  <strong>B.Tech Computer Science</strong>
                </div>
              </li>
              <li>
                <span className="contact-info-icon">
                  <MdOutlineWorkOutline aria-hidden="true" />
                </span>
                <div>
                  <small>Focus</small>
                  <strong>Java Full-Stack</strong>
                </div>
              </li>
            </ul>
          </article>

          <article className="contact-tile contact-tile-social">
            <p className="contact-tile-label">Connect</p>
            <div className="contact-social-stack">
              {SOCIALS.map(({ label, href, icon: Icon, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social-row"
                >
                  <span className="contact-social-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="contact-social-text">
                    <strong>{label}</strong>
                    <small>{handle}</small>
                  </span>
                  <MdArrowOutward aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>

          <article className="contact-tile contact-tile-quote">
            <p className="contact-quote">
              Building scalable products with clean architecture and thoughtful
              UX.
            </p>
            <div className="contact-quote-meta">
              <span className="contact-chip">Spring Boot</span>
              <span className="contact-chip">React</span>
              <span className="contact-chip">AWS</span>
            </div>
          </article>
        </div>

        <footer className="contact-footer">
          <div className="contact-footer-brand">
            <span className="contact-footer-mark">RW</span>
            <p>
              Designed &amp; developed by <strong>Ritik Waghamare</strong>
            </p>
          </div>
          <p className="contact-footer-copy">© {year} All rights reserved</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
