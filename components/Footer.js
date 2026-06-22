import Link from "next/link";

export default function Footer() {
  return (
    <div className="page">
      <footer className="footer">
        <span>© 2026 Mohamed Alaa Elden. All rights reserved.</span>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Cairo, EG · Frontend Developer
        </span>
      </footer>
    </div>
  );
}
