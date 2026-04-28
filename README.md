# calumbradley.dev – Personal Site & Portfolio

This repository contains the source code for [calumbradley.dev](https://calumbradley.dev), the personal site and portfolio of **Calum Bradley**.

It’s built with **Next.js** and **TypeScript**, with a focus on fast performance, accessibility, and a clean, minimal design.

## 🧑‍💻 About Calum

Calum Bradley is a software engineer based in Cheshire, UK, who enjoys turning messy requirements into calm, predictable systems. He works across the full stack with JavaScript/TypeScript, React, Node.js, SQL databases and DevOps tooling, with a particular interest in automation, CI/CD and keeping production outages comfortably boring. When he’s not shipping code, he’s usually out with his cocker spaniel, Chester, or trying to convince his golf handicap to go the right way.

This site includes:

- A portfolio of selected projects
- Writing and technical notes
- Contact and social links

## 🚀 Getting Started

```bash
git clone https://github.com/calumbradley/calumbradley.dev.git
cd calumbradley.dev
pnpm install
```

### Scripts

| Command      | Action                               |
| :----------- | :----------------------------------- |
| `pnpm dev`   | Start the local dev server           |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Run the production build             |
| `pnpm lint`  | Run linting                          |

## 🛠 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS (if applicable)
- Vercel (deployment)

## 📬 Contact form

The contact form at `/api/contact` is protected against common spam and automated submissions by built-in server-side checks with no third-party CAPTCHA dependency:

| Check | Detail |
| :---- | :----- |
| **Honeypot** | A hidden `website` field is rendered off-screen. Any non-empty value is rejected. |
| **Timing** | A `_t` timestamp is embedded when the page loads. Submissions arriving in under 3 seconds or more than 60 minutes after page load are rejected. |
| **Field length** | Name ≤ 100 chars, email ≤ 254 chars, message ≤ 5 000 chars. |

These checks run before any email is dispatched via Maileroo. The thresholds (`MIN_SUBMIT_MS`, `MAX_SUBMIT_MS`, field caps) can be adjusted in `src/pages/api/contact.ts`.

### Required environment variables

| Variable | Description |
| :------- | :---------- |
| `MAILEROO_API_KEY` | Maileroo API key |
| `MAILEROO_FROM` | Sender address, e.g. `"Display Name <from@example.com>"` |
| `CONTACT_EMAIL` | Recipient address for contact messages |

## 📄 License

Code in this repository is provided under your chosen license (update this section as needed).
