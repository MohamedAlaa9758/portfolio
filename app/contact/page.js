import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact — Mohamed Alaa Elden",
  description: "Get in touch with Mohamed Alaa Elden, Frontend Developer.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="page-hero">
        <div className="page">
          <div className="eyebrow">Get In Touch</div>
          <h1 className="page-hero-h1">Let&apos;s work together</h1>
          <p className="page-hero-sub">
            Open to new opportunities, freelance projects, and collaborations. Drop me a message anytime.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
