"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ theme, onToggleTheme }) {
  const pathname = usePathname();

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mohamed_Alaa_Elden_CV.pdf";
    link.download = "Mohamed_Alaa_Elden_CV.pdf";
    link.click();
  };

  const links = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav">
      <Link href="/" className="brand">
        MA<span>.</span>
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "nav-active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="nav-r">
        <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          <i className={theme === "dark" ? "ti ti-moon" : "ti ti-sun"} />
        </button>
        <button className="hire-btn" onClick={downloadCV}>
          <i className="ti ti-download" style={{ fontSize: 13 }} />
          CV
        </button>
      </div>
    </nav>
  );
}
