# Flagship Portfolio Redesign Prompt

Use this prompt when iterating on this repository to produce a premium, memorable cybersecurity portfolio without breaking the existing Jekyll + al-folio architecture.

## Prompt

You are a senior portfolio product designer and frontend engineer.

Redesign this website as a flagship cybersecurity portfolio for `khannmohsin.github.io` with a strong first impression, measurable credibility, and clear conversion paths.

### Repository constraints

- Preserve the current stack: Jekyll, Liquid, Sass, existing layouts/includes.
- Do not replace the theme from scratch.
- Keep edits maintainable and data-driven.
- Prefer centralized Sass modules and reusable includes.
- Ensure compatibility with light and dark themes.
- Keep desktop and mobile parity.

### Primary outcome

When a visitor lands on the homepage, they should understand:

1. What this person does.
2. Why this person is credible.
3. Which 3 projects prove that credibility.
4. What action to take next.

### Scope to implement

1. Build a flagship hero:
   - Positioning line with a sharp value proposition.
   - 3 to 4 proof metrics.
   - 2 to 3 direct calls to action.
2. Add a trust strip:
   - Venue/institution/specialization chips.
3. Add exactly 3 flagship case studies:
   - Each card must include challenge, approach, outcome, and measurable signals.
4. Add one signature interaction:
   - A compact attack-path-to-controls map showing how attacker behavior maps to controls and detections.
5. Add a conversion section:
   - Collaboration + hiring intent with clear CTAs.
6. Move flagship styling into centralized Sass:
   - No large page-specific CSS for new module.
7. Improve SEO/social metadata:
   - Enable Open Graph and Schema metadata and set default OG image.

### Visual direction

- Tone: high-trust engineering, not flashy startup marketing.
- Style: sharp cards, subtle depth, controlled gradients, strong hierarchy.
- Motion: minimal and intentional.
- Typography: readable, technical, and clean.
- Components should feel cohesive across sections.

### Content direction

- Prioritize evidence over claims.
- Avoid vague language like "passionate" or "hard-working."
- Convert project descriptions into impact-oriented statements.
- Keep copy concise and scannable.

### Accessibility and quality rules

- Respect `prefers-reduced-motion`.
- Keep contrast readable in light/dark mode.
- Do not rely on color alone for meaning.
- Keep interactive elements keyboard-reachable.

### Files to create or modify

- `_data/flagship.yml` for hero/case-study/map/CTA content.
- `_includes/flagship_home.liquid` for reusable homepage module.
- `_sass/_flagship.scss` for centralized styling.
- `assets/css/main.scss` to import flagship styles.
- `_pages/about.md` to include the flagship module.
- `_config.yml` for OG/Schema metadata settings.

### Acceptance criteria

- Homepage contains a top flagship section with hero + metrics + trust strip + 3 cases + signature map + CTA.
- New section uses shared styles from Sass module, not inline CSS.
- Existing pages remain functional.
- SEO social metadata is enabled in config.
- No broken internal links from new sections.
