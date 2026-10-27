# Warble Cloud — UI Developer Intern Take-Home

Welcome! This assignment helps us understand how you build UI components and how you explain your work to other developers.

- **Estimated time:** 4–6 hours
- **Deadline:** 48 hours from when you receive this assignment
- **Questions:** hr@warblecloud.com

## Getting started

1. Click **Use this template** on GitHub to create your own repository (public, so we can review it).
2. Clone it, then run:
   ```bash
   npm install
   npm run dev
   ```
3. Build your component in `src/components/TagInput/` and render it from `src/App.tsx`.

The scaffold is Vite + React + TypeScript, but you may use vanilla JS/TS, React, Next.js or Vue instead — just keep the mock data in `src/data/tags.ts` (15 tech tags).

## Part 1 — Build a Multi-Select Tag Input / Filter Component

Build a reusable multi-select tag input **from scratch**. Full UI libraries such as MUI or Ant Design are **not** allowed for the core component.

### Requirements

- **Type-ahead search** with dropdown suggestions from the mock dataset.
- **Add** a tag with Enter or click; **remove** one with its × button or Backspace on an empty input.
- **Prevent duplicate** tags.
- **Keyboard navigation** with Up/Down, and Enter to select.
- **Responsive layout** with smooth tag wrapping.
- **Modular structure**, type safety (if using TypeScript), and proper event cleanup.

Think about edge cases: empty states, rapid input, and long tag names.

**Bonus:** basic tests.

## Part 2 — Technical article (`ARTICLE.md`)

Write a **400–600 word** breakdown for frontend developers on **ONE** of:

1. Handling Keyboard Accessibility & Focus Traps in Custom Dropdown Components
2. Managing State & Re-renders: Custom Tag Inputs from Scratch
3. Why and How to Build Headless/Unstyled UI Components

Structure: problem, approach, code snippet breakdown. Be concise — no fluff. A skeleton is provided in [`ARTICLE.md`](./ARTICLE.md); **this file is the only accepted location for the article.**

## Deliverables

1. A GitHub repository created from this template.
2. A deployed live demo on **Vercel, Netlify or GitHub Pages**.
3. `ARTICLE.md` completed (400–600 words).

Use [`.github/PULL_REQUEST_TEMPLATE.md`](./.github/PULL_REQUEST_TEMPLATE.md) as your self-check before submitting.

## Submission

Submit your repo URL and live demo URL through **Warble's Jotform** (the link is in your invitation email) within 48 hours of receipt. Questions: **hr@warblecloud.com**.

## AI policy

AI tools are allowed, but you must be able to explain **every line** of your submission in the follow-up chat.

## Evaluation

Scored out of 100 — see [`RUBRIC.md`](./RUBRIC.md):

| Area | Points |
|---|---|
| Frontend Craft & Functionality | 30 |
| Code Architecture & Hygiene | 20 |
| Accessibility & UX Detail | 15 |
| Technical Writing Clarity | 25 |
| Developer Empathy & Tone | 10 |

Good luck — we're excited to see what you build!
