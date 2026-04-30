import { useEffect, useRef, useState } from "react";
import profileImage from "./assets/profile.jpg";

const stats = [
  { value: "5+", label: "Projects Shipped" },
  { value: "2", label: "Apps on Store" },
  { value: "AI", label: "Integrated Builds" },
];

const skillGroups = [
  {
    icon: "mobile",
    title: "Mobile Development",
    tags: ["React Native", "Expo SDK 54", "Expo Router v4", "TypeScript", "JavaScript ES6+"],
  },
  {
    icon: "data",
    title: "State & Data",
    tags: ["Zustand", "Redux Toolkit", "TanStack Query", "Axios", "REST APIs", "WebSockets"],
  },
  {
    icon: "build",
    title: "Build & Deployment",
    tags: ["EAS Build", "EAS Update (OTA)", "TestFlight", "Google Play", "App Store", "Deep Linking"],
  },
  {
    icon: "ui",
    title: "UI & Motion",
    tags: ["Reanimated", "Lottie", "Gesture Handler", "Push Notifications", "Firebase Analytics"],
  },
  {
    icon: "security",
    title: "Security",
    tags: ["Biometric Auth", "PIN Security", "JWT", "Secure Storage", "OAuth"],
  },
  {
    icon: "ai",
    title: "AI & Agents",
    tags: ["MCP Servers", "RAG Pipelines", "LLM Integration", "Claude Code", "GitHub Copilot"],
  },
];

const experience = [
  {
    role: "React Native Developer",
    company: "Pixel Web Solutions",
    date: "Jul 2025 - Present",
    bullets: [
      "Built BitsBuys, a crypto trading platform with live market data, portfolio tracking, and a TradingView chart widget with symbol search, interval toggles, and technical indicators.",
      "Architected the app with Expo SDK 54, Expo Router v4, atomic design patterns, Zustand, and TanStack React Query.",
      "Implemented WebSocket price streaming and CoinGecko REST integrations with normalized caching and responsive updates.",
      "Built DEMOWallet, a self-custodial wallet supporting Ethereum, Polygon, and BSC with mnemonic generation, biometric auth, and PIN security.",
      "Configured EAS Build pipelines and OTA update channels for staged Android and iOS releases.",
    ],
  },
  {
    role: "React Native Developer (Intern)",
    company: "Laabamone Business Solution",
    date: "Dec 2024 - Jul 2025",
    bullets: [
      "Contributed to LOB Smart Card and Face POS Payment, both shipped on Google Play and the iOS App Store.",
      "Managed TestFlight distribution, provisioning profiles, certificates, and App Store submissions.",
      "Built scanner flows, graph modules, and animation-heavy UI to improve app usability.",
      "Integrated REST APIs and tuned app performance across a broad Android device range.",
    ],
  },
];

const projects = [
  {
    name: "BitsBuys",
    badge: "Live",
    badgeClass: "badge-live",
    description:
      "Full-featured crypto trading platform with live market data, portfolio management, and an AI chatbot for real-time trading guidance. Includes an advanced TradingView widget with 10 toggleable indicators.",
    links: [
      {
        href: "https://drive.google.com/file/d/18fgN-fda14_K0yw1JxS8mZL2SvCRJph5/view?usp=sharing",
        label: "Download APK",
        icon: "android",
      },
    ],
    stack: ["React Native", "Expo SDK 54", "Zustand", "TypeScript", "WebSockets"],
  },
  {
    name: "DEMOWallet",
    badge: "APK",
    badgeClass: "badge-apk",
    description:
      "Self-custodial crypto wallet for Ethereum, Polygon, and BSC with BIP39 mnemonic generation, biometric lock, ERC-20 transfers, and multi-network support using ethers.js v6.",
    links: [
      {
        href: "https://drive.google.com/file/d/199meGWhv94JRWbkO5ZVViCWoygFblRh3/view?usp=sharing",
        label: "Download APK",
        icon: "android",
      },
    ],
    stack: ["React Native", "ethers.js v6", "BIP39", "JWT", "CoinGecko API"],
  },
  {
    name: "Face POS Payment",
    badge: "Live on Stores",
    badgeClass: "badge-live",
    description:
      "Facial recognition login, QR peer-to-peer payments, internal wallet support, and role-based flows for Customer, Merchant, and Admin.",
    links: [
      {
        href: "https://apps.apple.com/in/app/facepos/id6504408425",
        label: "App Store",
        icon: "apple",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.salesfacepos.facepos&hl=en_IN",
        label: "Google Play",
        icon: "play",
      },
    ],
    stack: ["React Native", "Expo", "Facial Recognition", "QR Payments"],
  },
  {
    name: "LOB Smart Card",
    badge: "Live on Android",
    badgeClass: "badge-live",
    description:
      "Identity management application with API integration, scanner UI, graph modules, and fluid animations, published on Google Play.",
    links: [
      {
        href: "https://play.google.com/store/apps/details?id=com.lobsmartcardnew.lobs&hl=en_IN",
        label: "Google Play",
        icon: "play",
      },
    ],
    stack: ["React Native", "Expo", "REST API", "Animations"],
  },
  {
    name: "Anuragavi Tracker",
    description:
      "QR-based production tracking across cutting, sewing, and packing stages with a performance analytics dashboard for garment manufacturing.",
    stack: ["React Native", "QR Scanning", "Analytics"],
  },
];

const contactLinks = [
  { href: "mailto:vigneshsiny2@gmail.com", label: "vigneshsiny2@gmail.com", icon: "mail" },
  { href: "tel:+917339009351", label: "+91 73390 09351", icon: "phone" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin", external: true },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const heroElements = document.querySelectorAll("#hero .reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    const timer = window.setTimeout(() => {
      heroElements.forEach((element, index) => {
        window.setTimeout(() => element.classList.add("visible"), index * 120);
      });
    }, 100);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}

function Icon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  };

  switch (name) {
    case "mobile":
      return <svg {...common}><rect x="7" y="2.5" width="10" height="19" rx="2.2" /><path d="M11 18h2" /></svg>;
    case "data":
      return <svg {...common}><ellipse cx="12" cy="5" rx="7" ry="3.5" /><path d="M5 5v6c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5V5" /><path d="M5 11v6c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5v-6" /></svg>;
    case "build":
      return <svg {...common}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.3-3.3a5 5 0 0 1-6.2 6.2l-7.9 7.9a2 2 0 1 1-2.8-2.8l7.9-7.9a5 5 0 0 1 6.2-6.2z" /></svg>;
    case "ui":
      return <svg {...common}><path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 0-4h-1.5a2.5 2.5 0 0 1 0-5H16a5 5 0 0 0 0-10h-4Z" /><circle cx="7.5" cy="10" r="0.8" /><circle cx="10.5" cy="8" r="0.8" /><circle cx="14" cy="8.4" r="0.8" /></svg>;
    case "security":
      return <svg {...common}><path d="M12 3 5 6v6c0 5 3.4 8.6 7 9 3.6-.4 7-4 7-9V6l-7-3Z" /><rect x="9.2" y="10.8" width="5.6" height="4.6" rx="1" /><path d="M10.5 10.8V9.6a1.5 1.5 0 1 1 3 0v1.2" /></svg>;
    case "ai":
      return <svg {...common}><path d="M12 4v2" /><rect x="6" y="8" width="12" height="10" rx="2" /><path d="M9 13h.01" /><path d="M15 13h.01" /><path d="M9 16h6" /><path d="M4 11h2" /><path d="M18 11h2" /></svg>;
    case "location":
      return <svg {...common}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "phone":
      return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 18z" /></svg>;
    case "mail":
      return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>;
    case "linkedin":
      return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
    case "send":
      return <svg {...common}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>;
    case "apple":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.22 12.88c.03 3.13 2.75 4.17 2.78 4.18-.02.07-.43 1.48-1.4 2.93-.84 1.25-1.71 2.5-3.08 2.53-1.34.02-1.77-.79-3.3-.79-1.53 0-2.01.76-3.28.81-1.31.05-2.31-1.31-3.16-2.55-1.73-2.51-3.05-7.08-1.28-10.15.88-1.53 2.45-2.49 4.15-2.52 1.29-.03 2.5.87 3.3.87.79 0 2.29-1.08 3.86-.92.66.03 2.52.27 3.72 2.03-.1.06-2.22 1.3-2.2 3.58Zm-1.27-7.48c.7-.85 1.17-2.03 1.04-3.2-1.01.04-2.23.67-2.95 1.52-.65.75-1.22 1.95-1.07 3.1 1.12.09 2.28-.57 2.98-1.42Z" /></svg>;
    case "play":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.61 2.73a1.2 1.2 0 0 0-.21.69v17.16c0 .25.07.49.21.69L13.2 11.7 3.61 2.73Zm10.59 9.91-2.06 2.05 6.8 3.88c.31.18.7.18 1.01 0 .48-.27.73-.74.73-1.24 0-.49-.25-.97-.73-1.24l-5.75-3.45Zm-2.06-1.93 2.06 2.05 5.75-3.45c.48-.28.73-.75.73-1.24 0-.5-.25-.97-.73-1.24a1.04 1.04 0 0 0-1.01 0l-6.8 3.88ZM4.42 1.95l9.82 9.16 4.7-2.67-13.6-7.76a.92.92 0 0 0-.92 0Zm14.52 13.61-4.7-2.67-9.82 9.16a.92.92 0 0 0 .92 0l13.6-7.76Z" /></svg>;
    case "android":
      return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.05 8.02h9.9c.58 0 1.05.47 1.05 1.05v6.88c0 .58-.47 1.05-1.05 1.05h-.7v2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9V17H9.55v2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9V17h-.7c-.58 0-1.05-.47-1.05-1.05V9.07c0-.58.47-1.05 1.05-1.05Zm2.3-3.25a.6.6 0 0 1-.11-.84.6.6 0 0 1 .84-.11L12 5.2l1.92-1.38a.6.6 0 1 1 .7.97L12.71 6.2a2 2 0 0 1 1.14 1.02h-3.7c.22-.43.62-.78 1.14-1.02L9.35 4.77ZM8.8 12.1a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Zm6.4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" /></svg>;
    default:
      return null;
  }
}

function App() {
  useReveal();
  const formRef = useRef(null);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "").trim() || "Portfolio Contact";
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setFeedback({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    const mailto = `mailto:vigneshsiny2@gmail.com?subject=${encodeURIComponent(
      `${subject} - from ${name}`,
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailto;
    setFeedback({
      type: "success",
      message: "Your mail client has opened. Send the email there to deliver your message.",
    });
    formRef.current?.reset();
  };

  return (
    <>
      <nav>
        <a className="nav-logo" href="#hero">
          V<span>.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="nav-cta" href="#contact">Contact Me</a>
      </nav>

      <section id="hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-circle-1"></div>
          <div className="hero-circle-2"></div>
        </div>

        <div className="hero-content reveal">
          <div className="hero-badge">Available for opportunities</div>
          <h1 className="hero-title">
            Vignesh
            <br />
            <span className="line-2">React</span> <span className="accent">Native</span>
            <br />
            <span className="line-2">Developer</span>
          </h1>
          <p className="hero-desc">
            Building production-grade fintech and crypto mobile applications.
            Expo SDK, TypeScript, AI integration, and real-time data systems.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#projects">
              <Icon name="arrow" />
              View Projects
            </a>
            <a className="btn-outline" href="#contact">
              <Icon name="mail" />
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>


      <hr className="divider" />

      <section id="about">
        <div className="about-grid">
          <div className="about-avatar-wrap reveal">
            <div className="about-avatar-ring"></div>
            <div className="about-avatar">
              <img className="about-avatar-image" src={profileImage} alt="Vignesh" />
            </div>
          </div>

          <div className="about-text reveal" style={{ transitionDelay: "0.1s" }}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting mobile
              <br />
              experiences that <span className="accent-inline">matter</span>
            </h2>
            <p>
              I&apos;m a <strong>React Native Developer</strong> at Pixel Web Solutions, building
              fintech and crypto mobile apps with a focus on performance, scalability, and real-world impact.
            </p>
            <p>
              From live WebSocket price feeds to biometric-secured crypto wallets, I enjoy working where
              <strong> mobile engineering and emerging technology</strong> overlap.
            </p>

            <div className="about-details">
              <div className="info-row">
                <Icon name="location" />
                Madurai, Tamil Nadu, India
              </div>
              <div className="info-row">
                <Icon name="phone" />
                +91 73390 09351
              </div>
              <div className="info-row">
                <Icon name="mail" />
                <a href="mailto:vigneshsiny2@gmail.com">vigneshsiny2@gmail.com</a>
              </div>
              <div className="info-row">
                <Icon name="linkedin" />
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn Profile</a>
              </div>
            </div>

            <div className="about-chips">
              <span className="chip">B.E. Computer Science</span>
              <span className="chip">Sethu Institute of Technology</span>
              <span className="chip">CGPA 7.9</span>
              <span className="chip">2020 - 2024</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="skills">
        <p className="section-label reveal">Technical Skills</p>
        <h2 className="section-title reveal">My Toolkit</h2>
        <p className="section-subtitle reveal">
          Production-tested technologies used to build and ship real applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((skill, index) => (
            <div key={skill.title} className="skill-card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
              <span className="skill-card-icon">
                <Icon name={skill.icon} />
              </span>
              <div className="skill-card-title">{skill.title}</div>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section id="experience">
        <p className="section-label reveal">Work History</p>
        <h2 className="section-title reveal">Experience</h2>
        <p className="section-subtitle reveal">Where I&apos;ve built, shipped, and grown as an engineer.</p>

        <div className="timeline">
          {experience.map((job, index) => (
            <div key={job.role} className="timeline-item reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="exp-header">
                <div>
                  <div className="exp-role">{job.role}</div>
                  <div className="exp-company">{job.company}</div>
                </div>
                <span className="exp-date">{job.date}</span>
              </div>
              <ul className="exp-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section id="projects">
        <p className="section-label reveal">Selected Work</p>
        <h2 className="section-title reveal">Projects</h2>
        <p className="section-subtitle reveal">
          Things I&apos;ve shipped, from crypto wallets to AI-powered trading apps.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.name} className="project-card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
              <div className="project-top">
                <div className="project-name">{project.name}</div>
                {project.badge ? <span className={`project-badge ${project.badgeClass}`}>{project.badge}</span> : null}
              </div>
              <p className="project-desc">{project.description}</p>
              {project.links ? (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="store-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name={link.icon} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              ) : null}
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item} className="stack-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section id="contact">
        <p className="section-label reveal">Get In Touch</p>
        <h2 className="section-title reveal">Let&apos;s work together</h2>

        <div className="contact-wrap">
          <div className="contact-info reveal">
            <p>
              I&apos;m open to full-time roles, freelance work, and collaborations around mobile products,
              fintech, crypto, and applied AI.
            </p>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="contact-link"
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <div className="contact-link-icon">
                  <Icon name={link.icon} />
                </div>
                {link.label}
              </a>
            ))}

            <div className="contact-cta">
              <a className="btn-primary" href="mailto:vigneshsiny2@gmail.com?subject=Portfolio%20Inquiry">
                <Icon name="mail" />
                Email Directly
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            className="contact-form reveal"
            style={{ transitionDelay: "0.1s" }}
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="field-wrap">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="field-wrap">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="field-wrap">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What is this about?" />
            </div>
            <div className="field-wrap">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>
            {feedback.message ? (
              <div className={`form-feedback ${feedback.type}`}>{feedback.message}</div>
            ) : null}
            <button type="submit" className="form-submit">
              <Icon name="send" />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <span>© 2025 Vignesh | React Native Developer | Madurai</span>
        <span>
          Built with React | <a href="#hero">Back to top</a>
        </span>
      </footer>
    </>
  );
}

export default App;
