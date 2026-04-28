import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as renderComponent, d as renderScript, e as addAttribute, f as renderHead, g as renderSlot } from '../chunks/astro/server_BYmE0RZ7.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D2J1hF6N.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const SITE_CONFIG = {
  title: "Calum Bradley — Lead Full Stack & DevOps Engineer",
  author: "Calum Bradley",
  description: "Software Engineer based in Cheshire, Uk. I specialize in UI design, web application development and maintenance.",
  lang: "en",
  siteLogo: "/calum-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" }
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://uk.linkedin.com/in/calumbradley" },
    { text: "Github", href: "https://github.com/calumbradley" }
  ],
  socialImage: "/og-calum.svg",
  canonicalURL: "https://calumbradley.dev"
};
function yearsSinceSep2014() {
  const startYear = 2014;
  const startMonth = 8;
  const now = /* @__PURE__ */ new Date();
  const months = (now.getFullYear() - startYear) * 12 + (now.getMonth() - startMonth);
  return Math.floor(Math.max(0, months) / 12);
}
const YEARS_AT_BARCLAYS = yearsSinceSep2014();
const SITE_CONTENT = {
  hero: {
    name: "Calum Bradley",
    specialty: "Full Stack & DevOps Developer",
    summary: "Developer based in Cheshire, UK with over a decade of experience building and running production systems. I work across full stack JavaScript, SQL databases and DevOps tooling to ship reliable software.",
    email: "cal@calumbradley.dev"
  },
  experience: [
    {
      company: "Barclays Bank",
      position: "Full Stack & DevOps Developer",
      startDate: "Aug 2022",
      endDate: "Present",
      summary: [
        "Build and maintain full stack JavaScript applications using React, Node.js and modern tooling to support internal teams and customer-facing journeys.",
        "Help shape DevOps practices around Git, GitLab CI/CD and automation, enabling teams to ship changes more frequently and with greater confidence.",
        "Partner with product, delivery and operational stakeholders to clarify requirements, manage expectations, and communicate trade-offs and delivery risks early.",
        "Influence team roadmaps by breaking down initiatives into pragmatic milestones, prioritising work based on impact, and reducing technical risk through early validation.",
        "Raise engineering standards via constructive code reviews, shared patterns, and lightweight documentation that improves consistency across the team.",
        "Support and mentor junior colleagues through pairing, guidance on best practices, and helping unblock work while encouraging ownership and growth.",
        "Coordinate with adjacent teams to align dependencies, improve integration points, and reduce friction across handovers and release activities."
      ]
    },
    {
      company: "Barclays Bank",
      position: "SQL Database Analyst",
      startDate: "Aug 2020",
      endDate: "Aug 2022",
      summary: [
        "Led the design and optimisation of SQL-based reporting and transactional systems, improving reliability and performance for business-critical banking applications.",
        "Collaborated closely with developers and stakeholders to translate complex data requirements into dependable, well-documented solutions."
      ]
    },
    {
      company: "Barclays Bank",
      position: "Corporate Client Analyst",
      startDate: "Aug 2020",
      endDate: "Sep 2014",
      summary: [
        "Supported corporate clients with SFTP file-transfer integrations and XML payload processing for corporate payments, settlements and periodic reporting; built secure ingestion and validation pipelines.",
        "Defined file-specs and payment/reporting requirements with payments, treasury and ops teams, implemented reconciliation and monitoring, and produced clear documentation and runbooks for handover."
      ]
    }
  ],
  about: {
    description: [
      `Hi, I’m Calum Bradley, a Full Stack and DevOps Developer with over ${YEARS_AT_BARCLAYS} years' experience at Barclays Bank.`,
      "I enjoy working with JavaScript, React, Node.js, Git and GitLab—especially where I can streamline workflows and improve reliability through automation and CI/CD pipelines. I’m comfortable moving from database queries and backend services through to front-end user interfaces.",
      "Outside of work you’ll usually find me walking the dogs, out on the golf course or watching football. My cocker spaniel, Chester, is usually nearby whenever I’m working on something new. I like keeping things practical, simple and reliable—both in code and in everyday life."
    ],
    image: "/calum-big.png"
  },
  contact: {
    title: "Contact",
    description: "If you’d like to talk about a project, role or just say hello, drop me a message below."
  }
};

const $$Astro$7 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, specialty, summary, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 md:py-32" id="#hero"> <h1 class="mb-1.5 font-serif text-7xl font-bold tracking-tightest text-white sm:text-8xl md:mb-0 md:text-9xl"> ${name} </h1> <p class="mb-9 font-serif text-4xl leading-[46px] font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl"> ${specialty} </p> <p class="mb-16 text-base font-normal text-neutral md:text-lg"> ${summary} </p> <a class="inline-block rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-[#fff]" href="#contact">Get in Touch</a> </section>`;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Hero.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>`;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/icons/Menu.astro", void 0);

const $$Astro$6 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteLogo, navLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-black px-5 py-6" data-astro-cid-3ef6ksr2> <a href="/" aria-label="Home link" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-full", "src": siteLogo, "width": "45", "height": "45", "alt": "website logo", "data-astro-cid-3ef6ksr2": true })} </a> <button type="button" id="menu-button" class="px-1.5 text-neutral sm:hidden" aria-expanded="false" aria-controls="main-menu" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-3ef6ksr2": true })} </button> <nav class="absolute top-20 right-5 hidden rounded-xl border border-neutral/40 bg-black px-4 py-5 text-neutral sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0" id="main-menu" data-astro-cid-3ef6ksr2> <ul class="gap-2 sm:flex" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => renderTemplate`<li class="relative" data-astro-cid-3ef6ksr2> <a${addAttribute(`nav-item relative block p-2 text-sm font-medium transition-all duration-500 after:absolute after:bottom-0 after:left-2/4 after:h-2 after:w-1 after:-translate-x-2/4 after:text-primary after:opacity-0 after:content-['\u2022'] hover:text-white`, "class")}${addAttribute(link.href, "href")} data-astro-cid-3ef6ksr2> ${link.text} </a> </li>`)} </ul> </nav> </header> ${renderScript($$result, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const { author, socialLinks } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-neutral/20 px-5 pt-5 pb-8 text-center text-white"> <ul class="mb-5 flex flex-wrap justify-center gap-x-5 text-xs"> ${socialLinks.map(({ text, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" class="inline-block px-4 py-3 after:relative after:bottom-[-4px] after:content-[url(/external.svg)] hover:text-primary"> ${text} </a> </li>`)} </ul> <p class="text-xs">${author} © ${currentYear}</p> </footer>`;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    siteLogo,
    navLinks,
    lang,
    author,
    socialLinks,
    socialImage,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href
  } = SITE_CONFIG;
  const ogImgUrl = canonicalURL + socialImage;
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-pt-16 scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(ogImgUrl, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImgUrl, "content")}>${renderHead()}</head> <body class="bg-black font-sans"> ${renderComponent($$result, "Header", $$Header, { "siteLogo": siteLogo, "navLinks": navLinks })} <main class="mx-auto max-w-3xl px-5"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "author": author, "socialLinks": socialLinks })} </body></html>`;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Section;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(href, "id")} class="py-24"> <h2 class="mb-14 font-serif text-4xl font-bold tracking-tighter text-white md:text-5xl"> ${text} </h2> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Section.astro", void 0);

const $$Astro$2 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Experience;
  const { experience } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "Work Experience", "href": "experience" }, { "default": ($$result2) => renderTemplate`${experience.map(({ company, position, startDate, endDate, summary }) => renderTemplate`${maybeRenderHead()}<div class="mb-10"> <h3 class="mb-1.5 font-serif text-2xl font-semibold text-white"> ${company} </h3> <div class="flex flex-col items-start pb-5"> <h4 class="mb-0.5 font-serif text-2xl font-medium text-primary"> ${position} </h4> <span class="pb-[2px] text-sm text-white/70"> ${startDate} — ${endDate} </span> </div> ${Array.isArray(summary) ? renderTemplate`<ul class="list-none"> ${summary.map((log) => renderTemplate`<li class="relative mb-3 pl-8 text-base text-neutral before:absolute before:top-1 before:left-0 before:content-[url(/check.svg)]"> ${log} </li>`)} </ul>` : renderTemplate`<p class="text-base text-neutral">${summary}</p>`} </div>`)}` })}`;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Experience.astro", void 0);

const $$Astro$1 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  const { description, image, name } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "text": "About Me", "href": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center gap-12 md:flex-row md:gap-8"> <div class="w-auto text-base text-neutral md:pr-5"> ${Array.isArray(description) ? description.map((para) => renderTemplate`<p class="mb-4">${para}</p>`) : renderTemplate`<p>${description}</p>`} </div> <div class="h-80 w-64 flex-shrink-0 rotate-[5deg] bg-white p-4 md:rotate-[7deg]"> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover", "src": image, "width": "260", "height": "260", "alt": name })} </div> </div> ` })}`;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/About.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", `
>
<script type="module">
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("contact-status");
  if (form) {
    // Record the time the form was loaded for server-side timing checks
    const tsField = form.querySelector("#form-ts");
    if (tsField) tsField.value = String(Date.now());

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn?.textContent || "Send Message";

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = form.querySelector("#name")?.value || "";
      const email = form.querySelector("#email")?.value || "";
      const message = form.querySelector("#message")?.value || "";
      // Bot-protection fields included in every request
      const honeypot = form.querySelector("#website")?.value || "";
      const formTs = form.querySelector("#form-ts")?.value || "";

      if (!name || !email || !message) {
        statusEl.textContent = "Please fill out all fields.";
        statusEl.className = "mt-2 text-sm text-yellow-300";
        return;
      }

      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sending...";
        }

        statusEl.textContent = "";

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message, website: honeypot, _t: formTs }),
        });

        const payload = await res.json().catch(() => ({}));

        if (res.ok && payload.ok) {
          statusEl.textContent = "Message sent \u2014 thanks!";
          statusEl.className = "mt-2 text-sm text-green-400";
          form.reset();
        } else {
          const err = payload.error || "Failed to send message.";
          statusEl.textContent = err;
          statusEl.className = "mt-2 text-sm text-red-400";
        }
      } catch (err) {
        statusEl.textContent = "Server error. Please try again later.";
        statusEl.className = "mt-2 text-sm text-red-400";
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }

        // remove the status message after a short delay
        setTimeout(() => {
          statusEl.textContent = "";
          statusEl.className = "mt-2 text-sm";
        }, 6000);
      }
    });
  }
<\/script>`])), renderComponent($$result, "Section", $$Section, { "text": title, "href": "contact" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-8"> <p class="w-full text-base text-neutral"> ${description} </p> <form id="contact-form" class="w-full max-w-2xl" method="POST" action="/api/contact">  <div aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;tab-index:-1;"> <label for="website">Website</label> <input id="website" name="website" type="text" tabindex="-1" autocomplete="off"> </div>  <input type="hidden" id="form-ts" name="_t" value=""> <div class="rounded-lg bg-transparent p-6 shadow-sm md:p-8"> <div class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-neutral mb-1">Name</label> <input id="name" name="name" type="text" required class="w-full rounded-md border border-neutral-600 bg-transparent px-3 py-2 text-white text-sm md:text-base focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"> </div> <div> <label for="email" class="block text-sm font-medium text-neutral mb-1">Email</label> <input id="email" name="email" type="email" required class="w-full rounded-md border border-neutral-600 bg-transparent px-3 py-2 text-white text-sm md:text-base focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"> </div> <div> <label for="message" class="block text-sm font-medium text-neutral mb-1">Message</label> <textarea id="message" name="message" rows="5" required class="w-full rounded-md border border-neutral-600 bg-transparent px-3 py-2 text-white text-sm md:text-base focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none"></textarea> </div> <div class="flex items-center justify-between pt-2"> <button type="submit" class="inline-block rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-white">
Send Message
</button> <div id="contact-status" class="text-sm text-neutral" role="status" aria-live="polite"></div> </div> </div> </div> </form> </div> ` }));
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { ...SITE_CONTENT.hero })} ${renderComponent($$result2, "Experience", $$Experience, { "experience": SITE_CONTENT.experience })} ${renderComponent($$result2, "About", $$About, { ...SITE_CONTENT.about, "name": SITE_CONTENT.hero.name })} ${renderComponent($$result2, "Contact", $$Contact, { ...SITE_CONTENT.contact })} ` })}`;
}, "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/pages/index.astro", void 0);

const $$file = "/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
