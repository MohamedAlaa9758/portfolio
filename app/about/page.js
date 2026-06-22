import Skills from "@/components/Skills";

export const metadata = {
  title: "About — Mohamed Alaa Elden",
  description: "Skills and core competencies of Mohamed Alaa Elden, Frontend Developer.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="page-hero">
        <div className="page">
          <div className="eyebrow">About Me</div>
          <h1 className="page-hero-h1">Skills & Expertise</h1>
          <p className="page-hero-sub">
            CS graduate passionate about crafting fast, accessible, and beautiful web experiences.
            Based in Cairo, Egypt — open to remote opportunities worldwide.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
}
