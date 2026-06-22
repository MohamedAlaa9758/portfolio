import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
  return (
    <div className="page">
      <section className="sec">
        <div className="con-grid">
          <div>
            <p className="con-lead">
              Open to new opportunities, freelance projects, and
              collaborations. Drop me a message anytime.
            </p>
            <div style={{ display: "flex", gap: ".65rem", flexWrap: "wrap" }}>
              <a href="mailto:mohamedalaa8865@gmail.com" className="btn-p">
                Send Email
              </a>
              <a
                href="https://wa.me/201148619932"
                className="cv-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>
          <div className="con-cards">
            <a href="mailto:mohamedalaa8865@gmail.com" className="ccard">
              <div className="cico">
                <i className="ti ti-mail" style={{ fontSize: 17 }} />
              </div>
              <div>
                <div className="clbl">Email</div>
                <div className="cval">mohamedalaa8865@gmail.com</div>
              </div>
            </a>
            <a
              href="https://wa.me/201148619932"
              className="ccard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cico wa">
                <WhatsAppIcon />
              </div>
              <div>
                <div className="clbl">WhatsApp</div>
                <div className="cval">+20 114 861 9932</div>
              </div>
            </a>
            <a href="tel:+201148619932" className="ccard">
              <div className="cico">
                <i className="ti ti-phone" style={{ fontSize: 17 }} />
              </div>
              <div>
                <div className="clbl">Phone</div>
                <div className="cval">+20 114 861 9932</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-alaa-0069a6246"
              className="ccard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cico">
                <i className="ti ti-brand-linkedin" style={{ fontSize: 17 }} />
              </div>
              <div>
                <div className="clbl">LinkedIn</div>
                <div className="cval">Mohamed Alaa Elden</div>
              </div>
            </a>
            <a
              href="https://github.com/MohamedAlaa9758"
              className="ccard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cico">
                <i className="ti ti-brand-github" style={{ fontSize: 17 }} />
              </div>
              <div>
                <div className="clbl">GitHub</div>
                <div className="cval">MohamedAlaa9758</div>
              </div>
            </a>
            <div className="ccard">
              <div className="cico">
                <i className="ti ti-map-pin" style={{ fontSize: 17 }} />
              </div>
              <div>
                <div className="clbl">Location</div>
                <div className="cval">Maadi, Cairo, Egypt</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
