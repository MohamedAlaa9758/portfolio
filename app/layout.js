import "./globals.css";
import ThemeWrapper from "@/components/ThemeWrapper";

export const metadata = {
  title: "Mohamed Alaa Elden — Frontend Developer",
  description: "Mohamed Alaa Elden, Frontend Developer from Cairo, Egypt. Specializing in React.js, Next.js, and the JavaScript ecosystem.",
  keywords: ["Mohamed Alaa Elden", "Frontend Developer", "React.js", "Next.js", "JavaScript", "Cairo", "Egypt", "Portfolio"],
  authors: [{ name: "Mohamed Alaa Elden" }],
  verification: {
    google: "qt0pulOqTKQKpB",
  },
  openGraph: {
    title: "Mohamed Alaa Elden — Frontend Developer",
    description: "Frontend Developer from Cairo, Egypt. Building modern web apps with React.js and Next.js.",
    url: "https://portfolio-phi-three-bqbwg3gbne.vercel.app",
    siteName: "Mohamed Alaa Elden Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mohamed Alaa Elden — Frontend Developer",
    description: "Frontend Developer from Cairo, Egypt.",
  },
  metadataBase: new URL("https://portfolio-phi-three-bqbwg3gbne.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
