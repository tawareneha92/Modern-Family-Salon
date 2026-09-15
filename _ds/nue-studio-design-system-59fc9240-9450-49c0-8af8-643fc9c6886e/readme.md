# Nue Studio — Design System

Nue Studio is a modern family nail salon and beauty studio. The brand reads like a fashion editorial rather than a salon site: ivory paper, espresso ink, one champagne-gold accent, large serif headlines, and a lot of empty space.

**Source material:** a written brand specification supplied in chat (colours, type scale, spacing, layout, section-by-section guidance for the marketing site). No codebase, Figma file, logo file, font binaries or photography were provided — everything here is built from that document. Where something had to be chosen rather than quoted, it is flagged below.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Entry point — `@import`s every token file. Consumers link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `motion.css`, `layout.css` |
| `components/` | React primitives — see list below |
| `ui_kits/website/` | Click-through recreation of the Nue Studio marketing site |
| `templates/salon-landing/` | Starting template: editorial one-page salon site |
| `guidelines/` | Foundation specimen cards (colour, type, spacing, brand) |
| `assets/` | Decorative line art (`arc.svg`, `corner-line.svg`, `sparkle.svg`) |
| `SKILL.md` | Agent-skill wrapper for use outside this project |

## Components

Grouped by concern; each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one card HTML.

- **core/** — `Button`, `Eyebrow`, `SectionHeading`, `ImageFrame`, `Sparkle`
- **content/** — `ServiceCard`, `FeatureCard`, `TeamCard`, `Testimonial`, `Accordion`
- **navigation/** — `SiteHeader`, `SiteFooter`
- **forms/** — `Field`

### Intentional additions
The brief defines sections, not a component inventory, so the list above is derived from the sections it describes. Two items have no explicit counterpart in the brief: `Field` (the Contact page is specified but no form control is) and `Sparkle` (the brief describes the four-point sparkle as a decorative element; it is packaged as a component so it can be placed consistently).

---

## Content fundamentals

**Voice.** Calm, plain and specific. The studio speaks as *we*; the reader is *you*. Sentences are short and declarative, with no exclamation marks and no sales pressure. Confidence comes from concrete detail — "three to four weeks, depending on nail growth" — not adjectives.

**Casing.** Headlines are sentence case in serif ("Our Services", "Have Questions?"). Eyebrows, navigation, buttons and roles are uppercase with wide tracking ("OUR STORY", "BOOK NOW", "NAIL ARTIST"). Never set a full sentence in uppercase.

**Length.** Section descriptions run one to two sentences, 15–30 words. Service descriptions are a single sentence. FAQ answers are one or two sentences.

**Examples.**
- Eyebrow: `OUR NAILS` · `OUR STORY` · `FOR SOMEONE ELSE`
- Headline: *Manicure And Pedicure* / *Nail Salon* (second line italic gold)
- Body: "A small studio on Calder Street for considered nail care. One artist, one guest, unhurried."
- CTA: `BOOK NOW` · `BUY A GIFT CARD` · `ASK US`

**Never.** No emoji. No "unlock", "elevate", "pamper yourself", "treat yourself", "luxury experience". No urgency copy, countdowns, or discount language. No exclamation marks.

---

## Visual foundations

**Colour.** Ivory `#F4F2EF` is the page; warm white `#FAF9F7` lifts alternating sections and cards. Espresso `#30221F` is ink and the one dark band (testimonials) plus the footer. Champagne gold `#B58B55` appears perhaps four times per page: the wordmark, the active nav link, the italic accent line, the accordion `+`. Soft beige `#DFC5A5` fills image placeholders and one feature card. Pure black is never used; ink starts at `#25201E`.

**Type.** Cormorant Garamond for everything display (400 regular, 500 for h3, italic for gold accents); Inter for body, navigation, buttons and labels. The pairing is doing all the personality work, which is why decoration stays minimal. Hero 64/1.0, h1 52/1.05, h2 40/1.1, h3 28/1.2; body 15/1.6, body-large 18/1.7; eyebrow 10px at 0.2em, nav 12px at 0.08em, button 11px at 0.14em.

**Spacing.** 8px base. Sections carry 104px of vertical padding on desktop, 80 on tablet, 64 on mobile; content maxes out at 1320px inside 48px gutters. Column gaps between editorial halves are 96–120px — the whitespace is the layout.

**Backgrounds.** Flat colour only. No gradients, no textures, no patterns, no full-bleed photographic heroes; imagery is always a contained frame inside a column. The only rhythm device is alternating ivory and warm white, punctuated once by the espresso band.

**Imagery.** Warm neutral editorial photography — beige and cream grounds, natural skin, soft directional light, hands and nails in frame. No filters, no duotones, no black and white. Radii 24–32px, with an arch crop for portraits and an asymmetric 32/4/32/4 crop for service rows; adjacent images alternate shape. Shadow `0 18px 50px rgba(48,34,31,.12)`. **No photography ships with this system** — `ImageFrame` renders a beige panel labelled with the intended subject until real assets arrive.

**Line art.** Thin 1px arcs and corner curves in `#3B3430` and `#B58B55`, at 50–60% opacity, placed behind or beside hero and gift-card imagery. Four-point sparkles at 12–22px, two or three per screen. Decoration frames; it never overlaps text or competes for attention.

**Borders.** One weight: 1px. `#D8D3CE` on light, `rgba(246,241,235,.18)` on espresso. Used for the header rule, accordion pills, form underlines, testimonial column dividers and the footer rule. Cards are defined by their ground colour and border, not by shadow.

**Shadows.** `sm 0 4px 20px rgba(48,34,31,.05)` on pill buttons, `md 0 10px 35px rgba(48,34,31,.08)` rarely, `image 0 18px 50px rgba(48,34,31,.12)` on photography. Nothing harder. No inner shadows. No glow.

**Corner radii.** 12px small cards, 16px feature cards and open accordion panels, 24–32px photography, `999px` pills for buttons and closed accordion rows. Nothing between 32px and full pill.

**Cards.** Feature cards: warm white / beige / gold-tint ground, 1px border on the white variant only, 32px padding, 16px radius, no shadow. Service "cards" are not cards at all — they are full-width two-column rows with no container.

**Hover.** Primary button fills `#44312C`; secondary inverts to espresso ground with ivory text; text links underline at 6px offset; nav links move from 78% to full opacity and to gold when active. No scale on hover, no shadow growth. **Press:** colour only — no shrink, no translate.

**Motion.** Fade-up (20px, 650ms) on section entry, gentle image reveal, slow line draw for arcs; hover transitions 250ms. Easing is always `cubic-bezier(.22,.61,.36,1)`. No bounce, no spin, no parallax, no large zoom.

**Transparency and blur.** Almost none. Transparency appears only as border and text alpha on espresso grounds and the 12% gold tint behind one feature card. No frosted glass, no backdrop blur, no protection gradients — text never sits on photography, so none are needed.

**Layout rules.** Header is 86px, static (not sticky) in the kit, with a hairline bottom rule. Two-column editorial splits everywhere on desktop; single column below 900px, hero image moving below the CTA, nav collapsing to a hamburger. FAQ accordion is capped at 660px. Body copy measures ~46ch.

---

## Iconography

No icon set, icon font or SVG sprite was supplied with the brand. The brief calls for "small line icons" above feature headings and circular arrow buttons on the testimonial carousel.

- **Brand marks (ours, from the written spec):** `assets/sparkle.svg` (four-point champagne star), `assets/arc.svg` and `assets/corner-line.svg` (thin decorative curves). These are decoration, not UI icons.
- **UI icons: substituted.** The website kit links **Lucide 0.454** from CDN at `stroke-width: 1.2` — the thinnest common open set, closest to the "thin line" direction. Icons in use: `gem`, `hand-heart`, `clock-3`, `chevron-left`, `chevron-right`. **Flagging this: if Nue Studio owns an icon set, supply it and the kit should be switched over.**
- Icons are never coloured other than `--text-accent` or the surrounding ink, never filled, and never used inside buttons or navigation.
- **No emoji, ever.** Unicode is used as an icon in exactly one place: the `+` in the FAQ accordion, set in Cormorant Garamond and rotated 45° when open.

## Logo

**No logo file was provided, and none has been invented.** The wordmark is "Nue Studio" set in Cormorant Garamond — champagne gold in the header at 26px, ivory in the footer at 46px, with `0.02em` tracking. Replace with the real mark when available.

## Fonts

Cormorant Garamond and Inter are the brand's own first choices, loaded from Google Fonts in `tokens/fonts.css` because **no font binaries were supplied**. If Nue Studio licenses Bodoni Moda or Montserrat instead, or has self-hosted files, send them and `tokens/fonts.css` becomes `@font-face` rules.
