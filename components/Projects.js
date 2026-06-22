"use client";

import { useState } from "react";
import { projects, filters } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = projects.filter(
    (p) => activeFilter === "all" || p.cat === activeFilter
  );

  return (
    <div className="page">
      <section className="sec">
        <div className="proj-tabs">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`tab-btn${activeFilter === f.key ? " active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {visibleProjects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
