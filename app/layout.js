import "./globals.css";
import ThemeWrapper from "@/components/ThemeWrapper";

export const metadata = {
  title: "Mohamed Alaa Elden — Frontend Developer",
  description:
    "Portfolio of Mohamed Alaa Elden, a Frontend Developer specializing in React.js, Next.js, and the JavaScript ecosystem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
