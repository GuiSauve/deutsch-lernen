# Deutsch Lernen — Expansion Plan

## Architecture

Refactor to a data-driven multi-file structure. Each grammar topic is a standalone JS data file (rules + exercises), rendered by a shared engine. Adding a topic = writing one data file, no changes to the app shell.

```
Deutsch/
├── index.html          ← topic hub / home screen
├── style.css           ← shared styles
├── engine.js           ← shared rules/tips/exercises renderer
└── topics/
    ├── n-deklination.js
    ├── cases.js
    ├── articles.js
    ├── adjective-endings.js
    ├── prepositions.js
    └── ...
```

> Requires a local dev server (e.g. `python -m http.server`) for JS module imports.

## Topic Roadmap

| # | Topic | Notes |
|---|-------|-------|
| 1 | ✅ N-Deklination | Done |
| 2 | Cases overview | What NOM/AKK/DAT/GEN mean and when to use them |
| 3 | Articles | der/die/das across all cases — the core table |
| 4 | Prepositions + cases | Fixed-case prepositions, two-way prepositions |
| 5 | Personal pronouns | ich/mich/mir, du/dich/dir, etc. |
| 6 | Adjective endings | Strong/weak/mixed — hardest topic, needs cases + articles first |
| 7 | Modal verbs | dürfen/können/müssen/sollen/wollen/mögen |
| 8 | Word order | V2 rule, subordinate clauses, verb-last |
| 9 | Comparative / superlative | Lighter topic, good change of pace |

## Each Topic Structure

Same 3-tab layout as N-Deklination:
- **Regeln** — rules with French comparison notes
- **Tipps & Tricks** — mnemonics and shortcuts
- **Übungen** — 3 exercise modes (Recognition / Case Forms / Sentences), randomized, with explanatory feedback
