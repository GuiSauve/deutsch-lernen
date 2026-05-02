# Deutsch lernen

A German grammar learning app built for people who actually want to understand the language — not just memorize tables.

**[→ Open the app](https://guillaumesauve.com/deutsch-lernen)**

---

## Why this exists

German grammar has a reputation for being brutal. Cases, declensions, articles that change depending on context — it can feel like a wall of rules with no logic behind them.

But most of it is more systematic than it looks. The problem is that most learning resources throw the full table at you without explaining *why* the pattern exists, or how to recognize it in the wild.

This app takes a different approach: one topic at a time, with the rule explained clearly, mnemonics to make it stick, and exercises that force you to apply it in real sentences — not just pick from a dropdown.

There are also **French comparison notes** throughout. French speakers have a specific challenge with German: French uses prepositions (*de, à, par*) to express grammatical roles that German encodes directly in the noun and article. Once you understand that mapping, a lot of German starts to click.

---

## Topics

| # | Topic | Status |
|---|-------|--------|
| 1 | Cases overview (NOM / AKK / DAT / GEN) | ✅ Done |
| 2 | Articles (der/die/das across all cases) | ✅ Done |
| 3 | Personal pronouns | ✅ Done |
| 4 | N-Deklination | ✅ Done |
| 5 | Prepositions + cases | Coming |
| 6 | Adjective endings | Coming |
| 7 | Modal verbs | Coming |
| 8 | Word order | Coming |
| 9 | Comparative / superlative | Coming |

---

## How each topic works

Every topic follows the same three-tab structure:

- **Rules** — the rule, explained plainly, with French comparison notes where relevant
- **Tips & Tricks** — mnemonics and shortcuts to recognize and apply the pattern faster
- **Exercises** — three exercise modes (Recognition, Case Forms, Sentences), randomized, with detailed feedback on every answer

---

## Stack

Plain HTML, CSS, and JavaScript. No framework, no build step, no dependencies.

Run locally with any static server — e.g. `python -m http.server`.
