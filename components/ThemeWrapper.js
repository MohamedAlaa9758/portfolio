"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ThemeWrapper({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>{children}</main>
      <div className="div" />
      <Footer />
      <a
        href="https://wa.me/201148619932"
        className="wa-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
