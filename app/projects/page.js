import ProjectsClient from "@/components/Projects";

export const metadata = {
  title: "Projects — Mohamed Alaa Elden",
  description: "Selected work and projects built by Mohamed Alaa Elden.",
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="page-hero">
        <div className="page">
          <div className="eyebrow">Selected Work</div>
          <h1 className="page-hero-h1">Projects I&apos;ve built</h1>
          <p className="page-hero-sub">
            A collection of web apps and experiments — from e-commerce platforms to real-time dashboards.
          </p>
        </div>
      </div>
      <ProjectsClient />
    </div>
  );
}
