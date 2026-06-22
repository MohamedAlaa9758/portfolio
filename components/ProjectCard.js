"use client";

import { useState } from "react";

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    project.demo
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <div className="pcard" data-cat={project.cat}>
      <div className="pscreen-wrap">
        <span className={`cat-badge ${project.catClass}`}>
          {project.catLabel}
        </span>
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="pscreen"
            src={screenshotUrl}
            alt={project.name}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="pscreen-fallback">
            <i className={`ti ${project.icon}`} />
          </div>
        )}
      </div>
      <div className="pcontent">
        <div className="pname">{project.name}</div>
        <p className="pdesc">{project.desc}</p>
        <div className="ptags">
          {project.tags.map((t) => (
            <span className="ptag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="plinks">
          <a href={project.demo} className="plink" target="_blank" rel="noopener noreferrer">
            Live Demo <i className="ti ti-arrow-right" style={{ fontSize: 12 }} />
          </a>
          <a
            href={project.github}
            className="plink plink-gh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ti ti-brand-github" style={{ fontSize: 14 }} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
