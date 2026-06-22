import Experience from "@/components/Experience";

export const metadata = {
  title: "Experience — Mohamed Alaa Elden",
  description: "Professional experience and career path of Mohamed Alaa Elden.",
};

export default function ExperiencePage() {
  return (
    <div>
      <div className="page-hero">
        <div className="page">
          <div className="eyebrow">Career Path</div>
          <h1 className="page-hero-h1">Professional Experience</h1>
          <p className="page-hero-sub">
            From AI training to frontend engineering — building real products with modern tech stacks.
          </p>
        </div>
      </div>
      <Experience />
    </div>
  );
}
