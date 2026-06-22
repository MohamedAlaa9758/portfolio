"use client";

import Link from "next/link";

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mohamed_Alaa_Elden_CV.pdf";
    link.download = "Mohamed_Alaa_Elden_CV.pdf";
    link.click();
  };

  return (
    <div className="hero-section">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="page">
        <section className="hero">
          <div>
            <div className="hero-tag">
              <span className="dot" />
              Open to Opportunities
            </div>
            <h1 className="hero-h1">
              Mohamed
              <br />
              Alaa Elden
              <br />
              <em>Frontend Dev</em>
            </h1>
            <p className="hero-sub">
              CS graduate building modern web apps with React.js, Next.js,
              and the full JavaScript ecosystem. Cairo, Egypt.
            </p>
            <div className="hero-acts">
              <Link href="/projects" className="btn-p">
                View My Work
              </Link>
              <Link href="/contact" className="btn-g">
                Get in Touch
              </Link>
              <a
                href="#"
                className="cv-btn"
                onClick={(e) => {
                  e.preventDefault();
                  downloadCV();
                }}
              >
                <i className="ti ti-download" style={{ fontSize: 14 }} />
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-blob" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-photo"
              src="/profile.jpg"
              alt="Mohamed Alaa Elden"
            />
          </div>
        </section>

        {/* Quick nav cards */}
        <div className="home-cards">
          <Link href="/about" className="hcard">
            <div className="hcard-ico"><i className="ti ti-sparkles" /></div>
            <div>
              <div className="hcard-title">Skills & About</div>
              <div className="hcard-sub">Core competencies & stack</div>
            </div>
            <i className="ti ti-arrow-right hcard-arrow" />
          </Link>
          <Link href="/experience" className="hcard">
            <div className="hcard-ico"><i className="ti ti-briefcase" /></div>
            <div>
              <div className="hcard-title">Experience</div>
              <div className="hcard-sub">Career path & roles</div>
            </div>
            <i className="ti ti-arrow-right hcard-arrow" />
          </Link>
          <Link href="/projects" className="hcard">
            <div className="hcard-ico"><i className="ti ti-code" /></div>
            <div>
              <div className="hcard-title">Projects</div>
              <div className="hcard-sub">Selected work I've built</div>
            </div>
            <i className="ti ti-arrow-right hcard-arrow" />
          </Link>
          <Link href="/contact" className="hcard">
            <div className="hcard-ico"><i className="ti ti-mail" /></div>
            <div>
              <div className="hcard-title">Contact</div>
              <div className="hcard-sub">Let's build something great</div>
            </div>
            <i className="ti ti-arrow-right hcard-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
