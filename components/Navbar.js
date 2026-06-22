"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar({ theme, onToggleTheme }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Mohamed_Alaa_Elden_CV.pdf";
    link.download = "Mohamed_Alaa_Elden_CV.pdf";
    link.click();
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="nav">
        <Link href="/" className="brand">
          MA<span>.</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "nav-active" : ""}>
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
          {/* Hamburger — mobile only */}
          <button className="icon-btn hamburger" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            <i className={menuOpen ? "ti ti-x" : "ti ti-menu-2"} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-link${pathname === link.href ? " nav-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
