# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Individual candidates preparing for the AWS Certified Solutions Architect – Associate certification (exam code SAA-C03). They study alone, outside of class, in short and repeated sessions, and they are preparing for a timed, multiple-choice certification exam. Their job is to internalize enough AWS service knowledge to answer scenario questions correctly under exam conditions, and to know which questions they are still getting wrong.

## Product Purpose

flash-card-exam turns a large bank of real AWS SAA-C03 exam questions into an effective study tool, offering two complementary study modes:

- **Study** — browse the bank in source order, pick an answer or reveal the correct one, then grade yourself against it.
- **Practice exam** — a full-length, timed multiple-choice exam with a final score and a review of every question.

Success means the learner converts weak or unseen questions into reliable answers, and can sit the real exam with both knowledge and pacing confidence. The product's outcome is measured in questions correctly answered, not in time spent in the app.

## Positioning

The content is the asset: 963 real AWS SAA-C03 exam questions with the correct answer marked on each, parsed from exam-prep documents. Most flash-card apps make the user author the deck; this product ships the deck, and adds a realistic timed exam on top of the same question bank. A generic quiz tool could not claim this without the licensed content.

## Operating Context

- The learner is alone with a phone or a laptop, usually in short sessions, often between other study activities.
- The full question bank is 963 questions; a single practice exam is a subset, and the question order and selection are a product decision.
- Questions are long AWS scenario descriptions with four options and one marked correct answer; several require reading carefully to spot the qualifying phrase ("LEAST operational overhead", "FEWEST changes to the code", "MOST operational efficiency").
- 102 questions mark two correct answers ("choose two") and 14 mark three ("choose three"), so the grader must accept a set of selections, not a single choice.
- Study progress must survive a browser reload and a closed tab; the learner may study across devices but the product does not require an account to be useful.

## Capabilities and Constraints

- **Question bank**: 963 parsed SAA-C03 questions from the five files in `data-source/`, each with four or five options and the correct answer marked with `✅`. Original numbering runs 1–1019 with gaps (the source omits 51 numbers, so the bank is not contiguous). 102 questions mark two correct answers ("choose two"); 14 mark three.
- **Two study modes**: study (pick-or-reveal + self-grade) and timed practice exam (scoring + full review).
- **Persistence is browser-only** (localStorage, three keys under the `fce.v1` namespace: study progress, the last exam setup, and the last 20 finished exams). No accounts, no server, no sync. This is a confirmed constraint, not an open question; cloud sync was considered and deferred.
- **Language**: the UI and the source questions are both English. Source questions are used verbatim; no translation.
- **Stack is fixed**: React 19 + TypeScript + Vite + Tailwind CSS v4, already scaffolded in this repo. `lucide-react`, `class-variance-authority`, `cn`, and `shadcn` are installed and available.
- **The question bank is parsed at build time**: `scripts/parse-questions.mjs` reads `data-source/*.md` — two different header conventions, inline `**bold**` option markup, and `✅` marks — and emits `src/data/questions.json` plus a `data-source/parse-report.md` fix list. The parser refuses to emit a broken question; anything failing the validation gate lands in the report instead.
- **Content is authoritative and must not be edited**: question text, option order, and the marked correct answer come from the source documents. The product layers on grading, scoring, and progress — it never rewrites, paraphrases, or reorders the exam content itself.
- **No content library is user-editable**: there is no authoring, importing, or editing of questions in the product.
- **Five questions reference diagrams whose image data was stripped from the source.** They render a placeholder that names the missing file, never a broken image.

## Brand Commitments

- Product name: **flash-card-exam**.
- Voice: a focused study tool for a solo learner. Clear, direct, and instructional. No gamified spectacle, no streaks, no confetti, no leaderboards; the learner is preparing for a professional certification, and the product's tone should respect that.
- The interface is English-only.

## Evidence on Hand

- `data-source/AWS Certified Solutions Architect – Associate (SAA-C03) - PART-1.docx.md` through `PART-5.docx.md` — the complete question bank (963 parsed questions, original numbers 1–1019 with gaps) with correct answers marked. The authoritative content.
- No testimonials, customer logos, usage metrics, benchmark scores, or press. Future work must not fabricate any of these.
- No brand assets, logo, or photography. The starter Vite/React assets were removed as template placeholders, not product identity.
- The design system now exists: `src/index.css` holds a token layer (a neutral surface ramp, one accent, and a semantic state vocabulary, with dark mode via `prefers-color-scheme`), and `src/components/ui/` holds the shared primitives. `src/App.tsx` is the product shell.

## Product Principles

1. **The exam content is the product.** Everything in the interface exists to get a learner closer to answering the next real exam question correctly. UI that does not move that number does not earn its space.
2. **One question at a time, always.** Both modes present a single question with its full scenario text. Never split a scenario across a card, a panel, and a tooltip.
3. **Progress is visible and local.** The learner can always see what they know, what they are still missing, and what their practice-exam score would be — without creating an account.
4. **Respect the exam's own difficulty.** No assistance during a timed exam that the real exam would not offer; no timer that pressures before the learner is ready.
5. **Grading is exact, never generous.** A multi-answer question is right only when the selected set is exactly the correct set. There is no partial credit, and the results screen says so.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established yet. Baseline web accessibility is expected as a matter of craft: the whole exam is operable from the keyboard (keys 1–5 select an option, Space reveals, the arrow keys move between questions, Enter checks), contrast meets WCAG AA in both light and dark schemes, and the self-grading flow never depends on colour alone — the correct, incorrect, and selected states each carry a distinct border treatment and a written label as well as a hue.
