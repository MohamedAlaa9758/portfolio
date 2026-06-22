export const skills = [
  {
    label: "Frontend Core",
    items: [
      { name: "React.js", hot: true },
      { name: "Next.js", hot: true },
      { name: "JavaScript", hot: true },
      { name: "TypeScript", hot: true },
      { name: "HTML5", hot: true },
      { name: "CSS3", hot: true },
    ],
  },
  {
    label: "State & Data",
    items: [
      { name: "Redux Toolkit", hot: true },
      { name: "React Query", hot: true },
      { name: "RESTful APIs", hot: true },
      { name: "Redux", hot: true },
      { name: "JSON", hot: true },
    ],
  },
  {
    label: "UI & Styling",
    items: [
      { name: "Tailwind CSS", hot: true },
      { name: "Bootstrap", hot: true },
      { name: "Shadcn/ui", hot: true },
      { name: "Responsive Design", hot: true },
      { name: "Figma", hot: true },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", hot: true },
      { name: "GitHub", hot: true },
      { name: "jQuery", hot: true },
      // { name: "UI/UX Collaboration", hot: false },
    ],
  },
];

export const experience = [
  {
    period: "Dec 2025 — Present",
    role: "Frontend Developer",
    badge: "Tech Tent · Remote",
    bullets: [
      "Building responsive web apps with React.js and Next.js",
      "Creating reusable UI components and optimizing performance",
      "Integrating REST APIs and managing state at scale",
      "Code reviews following clean code best practices",
    ],
  },
  {
    period: "Mar — Sep 2025",
    role: "Frontend Developer — Internship",
    badge: "Route Academy",
    bullets: [
      "Responsive websites using HTML, CSS, JS, Tailwind, React.js",
      "Translated Figma designs into pixel-perfect components",
      "Version control and team collaboration with Git/GitHub",
    ],
  },
  {
    period: "Jul 2024 — Mar 2025",
    role: "AI Trainer",
    badge: "Outlier",
    bullets: [
      "Trained LLMs (Gemini, GPT-3.5, LLaMA, Claude) using RLHF",
      "Assessed outputs for correctness, safety, and quality",
      "Applied prompt engineering to optimize AI responses",
    ],
  },
  {
    period: "Mar 2023 — Mar 2024",
    role: "Technical Support & System Admin",
    badge: "Egyptian Naval Shipyard",
    bullets: [
      "Managed and maintained the warehouse web system",
      "Provided technical support and end-user training",
      "System administration: accounts, updates, data security",
    ],
  },
];

export const projects = [
  {
    cat: "next",
    catLabel: "Next.js",
    catClass: "cat-next",
    icon: "ti-shopping-cart",
    name: "MoMart",
    desc: "Full e-commerce platform with product browsing, item views, and smooth shopping experience.",
    tags: ["Next.js", "Redux", "Tailwind"],
    demo: "https://mo-mart.vercel.app/",
    github: "https://github.com/MohamedAlaa9758/MoMart",
  },
  {
    cat: "js",
    catLabel: "JavaScript",
    catClass: "cat-js",
    icon: "ti-cloud",
    name: "Weather App",
    desc: "Real-time weather for any city with dynamic visuals and live API integration.",
    tags: ["JavaScript", "Weather API", "CSS"],
    demo: "https://mohamedalaa9758.github.io/WeatherApp/",
    github: "https://github.com/MohamedAlaa9758/WeatherApp",
  },
  {
    cat: "js",
    catLabel: "JavaScript",
    catClass: "cat-js",
    icon: "ti-device-gamepad-2",
    name: "Game Reviews",
    desc: "A game reviews web app to browse and explore ratings and reviews for popular games.",
    tags: ["JavaScript", "CSS", "API"],
    demo: "https://mohamedalaa9758.github.io/Game-Reviews/",
    github: "https://github.com/MohamedAlaa9758/Game-Reviews",
  },
  {
    cat: "js",
    catLabel: "JavaScript",
    catClass: "cat-js",
    icon: "ti-bookmark",
    name: "BookMark CRUD",
    desc: "Bookmark manager with full CRUD operations built in pure JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "https://mohamedalaa9758.github.io/BookMark-Crud-/",
    github: "https://github.com/MohamedAlaa9758/BookMark-Crud-",
  },
  {
    cat: "html",
    catLabel: "HTML/CSS",
    catClass: "cat-html",
    icon: "ti-bread",
    name: "Bakary",
    desc: "A bakery landing page with clean HTML/CSS layout and responsive design.",
    tags: ["HTML", "CSS"],
    demo: "https://mohamedalaa9758.github.io/Bakary/",
    github: "https://github.com/MohamedAlaa9758/Bakary",
  },
  {
    cat: "html",
    catLabel: "HTML/CSS",
    catClass: "cat-html",
    icon: "ti-user-circle",
    name: "Fokir",
    desc: "Personal portfolio template with elegant HTML/CSS design and smooth layout.",
    tags: ["HTML", "CSS"],
    demo: "https://mohamedalaa9758.github.io/Fokir/",
    github: "https://github.com/MohamedAlaa9758/Fokir",
  },
];

export const filters = [
  { key: "all", label: "All" },
  { key: "react", label: "React.js" },
  { key: "next", label: "Next.js" },
  { key: "js", label: "JavaScript" },
  { key: "html", label: "HTML / CSS" },
];
