import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Calum Bradley — Web Developer",
  author: "Calum Bradley",
  description:
    "Software Engineer based in Cheshire, Uk. I specialize in UI design, web application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Calum Bradley",
    specialty: "Full Stack & DevOps Developer",
    summary:
      "Developer based in Cheshire, UK with over a decade of experience building and running production systems. I work across full stack JavaScript, SQL databases and DevOps tooling to ship reliable software.",
    email: "",
  },
  experience: [
    {
      company: "Barclays Bank",
      position: "SQL Database Analyst",
      startDate: "Aug 2020",
      endDate: "Aug 2022",
      summary: [
        "Led the design and optimisation of SQL-based reporting and transactional systems, improving reliability and performance for business-critical banking applications.",
        "Collaborated closely with developers and stakeholders to translate complex data requirements into dependable, well-documented solutions.",
      ],
    },
    {
      company: "Barclays Bank",
      position: "Full Stack & DevOps Developer",
      startDate: "Aug 2022",
      endDate: "Present",
      summary: [
        "Build and maintain full stack JavaScript applications using React, Node.js and modern tooling to support internal teams and customer-facing journeys.",
        "Help shape DevOps practices around Git, GitLab CI/CD and automation, enabling teams to ship changes more frequently and with greater confidence.",
      ],
    },
    {
      company: "Waitrose",
      position: "Supermarket Assistant",
      startDate: "Aug 2009",
      endDate: "Sep 2014",
      summary:
        "Provided front-line customer service and day-to-day store support, developing strong communication skills, attention to detail and a reliable work ethic.",
    },
  ],
  about: {
    description: `
      Hi, I’m Calum Bradley, a Full Stack and DevOps Developer with over 11 years’ experience at Barclays Bank. I’ve worked across SQL database analysis, application development and DevOps, helping to design, build and support systems that people rely on every day.

      I enjoy working with JavaScript, React, Node.js, Git and GitLab—especially where I can streamline workflows and improve reliability through automation and CI/CD pipelines. I’m comfortable moving from database queries and backend services through to front-end user interfaces.

      Outside of work you’ll usually find me walking the dogs, out on the golf course or watching football. I like keeping things practical, simple and reliable—both in code and in everyday life.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
