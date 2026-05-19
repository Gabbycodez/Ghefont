# Ghefont™
### *Your text. Styled your way. No detours.*

> Born out of one too many trips to another site just to get cute fonts for my Notion.
> Stop leaving Notion to grab a fancy font. Ghefont lives where you work.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://ghefont.vercel.app/)
![React](https://img.shields.io/badge/React-Hooks-61DAFB?style=flat-square&logo=react)


---

## Overview

**Ghefont™** is a React web app that transforms plain text into stylized Unicode typography — think 𝗯𝗼𝗹𝗱, 𝘤𝘶𝘳𝘴𝘪𝘷𝘦, 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎, and more — instantly, in Notion.

## Why

Notion's font options are limited by design. But Unicode styled characters work everywhere — they're just text. The problem was always the friction: open a new tab, find a converter tool, style your text, copy it, come back to Notion, paste it. Every. Time.

Ghefont removes that entirely. It's a tool built for one environment, doing one job well.

---

## Features

- **Real-time preview** — styled output updates as you type, across all font roles simultaneously
- **Role-based typography system** — independently style four content roles:
  - `Heading` — for titles and primary text
  - `Subheading` — for secondary labels and section titles
  - `Emphasis` — for highlighted or accented words
  - `Text` — for body-level content
- **Dropdown font selector** — swap font styles per role on the fly
- **Unicode font mappings** — character-level transformations using Unicode ranges (bold, cursive, monospace, and more)
- **Copy to clipboard** — one-click copy per styled card
- **Rotating placeholder prompts** — dynamic input hints to spark ideas
- **Clean card-based UI** — each role rendered in its own styled preview card
- **No dependencies on external font files** — all styling is pure Unicode, paste-safe everywhere

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React (functional components) |
| Logic | JavaScript ES6+ |
| Styling | CSS (inline styles) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js `v16+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/gabbycodez/ghefont.git

# 2. Navigate into the project
cd ghefont

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will be running at `http://localhost:3000`.

---

## Usage

1. **Type** any text into the input field
2. **Preview** how it looks across all four roles — Heading, Subheading, Emphasis, and Text
3. **Select** a font style from the dropdown on each card
4. **Copy** the result with the copy button and paste it anywhere

That's it. No account needed.

**At the moment, it only has my favorite fonts I like to use** 
**Custom fonts coming soon**

---

## Project Structure

```
ghefont/
├── public/
│   └── index.html
├── src/
│   ├── components/         # UI components (input, cards, dropdowns)
│   ├── data/
│   │   └── fontMaps.js     # Unicode character transformation maps
│   ├── App.js              # Root component, state management
│   ├── index.js            # Entry point
│   └── styles/             # Inline styles and style constants
└── package.json
```

- **`fontMaps.js`** — the core of the app; maps each ASCII character to its Unicode styled equivalent per font
- **`App.js`** — manages the controlled input, placeholder rotation, and role/font state
- **Components** — each role card is a self-contained component with its own dropdown and copy button

---

## Things that could be added

- [ ] **Custom font import** — let users define and upload their own Unicode character mappings
- [ ] **Favorites / history** — save frequently used style combinations
- [ ] **Per-word styling** — apply different fonts to individual words within one string
- [ ] **Dark mode**
- [ ] **Share link** — generate a URL that pre-fills styled text output
- [ ] **Mobile UX polish** — improved layout and interactions on smaller screens

---

## Deployment

Live at → **[ghefont.vercel.app](https://ghefont.vercel.app/)**

Deployed via [Vercel](https://vercel.com/) with automatic builds on push to `main`.

---

## Background

I kept leaving Notion every time I wanted styled text for a header or callout. It was a small annoyance that happened often enough to become a real one. So I built Ghefont — a tool that embeds directly into Notion so the font converter is just *there*, in the page, whenever you need it.

Small problem. Focused fix.

---

## Ghefont™
