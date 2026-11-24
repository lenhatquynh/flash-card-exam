# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Individual candidates preparing for the AWS Certified Solutions Architect – Associate certification (exam code SAA-C03). They study alone, outside of class, in short and repeated sessions, and they are preparing for a timed, multiple-choice certification exam. Their job is to internalize enough AWS service knowledge to answer scenario questions correctly under exam conditions, and to know which questions they are still getting wrong.

## Product Purpose

flash-card-exam turns a large bank of real AWS SAA-C03 exam questions into an effective study tool, offering two complementary study modes:

- **Flashcards** — reveal the answer, self-grade against the marked correct option, and use spaced repetition so that weak questions resurface more often.
- **Practice exam** — a full-length, timed multiple-choice exam with a final score and a review of every question.

Success means the learner converts weak or unseen questions into reliable answers, and can sit the real exam with both knowledge and pacing confidence. The product's outcome is measured in questions correctly answered, not in time spent in the app.

## Positioning

The content is the asset: 956 real AWS SAA-C03 exam questions with the correct answer marked on each, parsed from exam-prep documents. Most flash-card apps make the user author the deck; this product ships the deck, and adds a spaced-repetition schedule and a realistic timed exam on top of the same question bank. A generic quiz tool could not claim this without the licensed content.

## Operating Context

- The learner is alone with a phone or a laptop, usually in short sessions, often between other study activities.
- The full question bank is 956 questions; a single practice exam is a subset, and the question order and selection are a product decision.
- Questions are long AWS scenario descriptions with four options and one marked correct answer; several require reading carefully to spot the qualifying phrase ("LEAST operational overhead", "FEWEST changes to the code", "MOST operational efficiency").
- 113 questions mark two correct answers ("choose two"), so the grader must accept a set of selections, not a single choice.
- Study progress must survive a browser reload and a closed tab; the learner may study across devices but the product does not require an account to be useful.

## Capabilities and Constraints

- **Question bank**: 956 parsed SAA-C03 questions from the five files in `data-source/`, each with four options and the correct answer marked with `✅`. Original numbering runs 1–975 with gaps (45 numbers are absent from the sources, so the bank is not a contiguous 1–1000). 113 questions mark two correct answers ("choose two"); 2 questions carry no marked answer and need one supplied or one excluded.
- **Two study modes**: flashcards (reveal + self-grade + spaced repetition) and timed practice exam (scoring + full review).
- **Persistence is browser-only** (localStorage). No accounts, no server, no sync. This is a confirmed constraint, not an open question; cloud sync was considered and deferred.
- **Language**: the UI and the source questions are both English. Source questions are used verbatim; no translation.
- **Stack is fixed**: React 19 + TypeScript + Vite + Tailwind CSS v4, already scaffolded in this repo. `lucide-react`, `class-variance-authority`, `cn`, and `shadcn` are installed and available; `src/index.css` still carries the Vite starter theme and must be replaced with the product's own tokens.
- **The question bank has no parser yet**: `data-source/*.md` is raw markdown with two different header conventions (`**Question**  12` in PART-1, `**Question 312` in PART-2 through PART-5), inline `**bold**` option markup, and `✅` marks. A build-time parser is needed to turn it into structured questions.
- **Content is authoritative and must not be edited**: question text, option order, and the marked correct answer come from the source documents. The product layers on scheduling, grading, scoring, and progress — it never rewrites, paraphrases, or reorders the exam content itself.
- **No content library is user-editable**: there is no authoring, importing, or editing of questions in the product.
- Open product decisions not yet settled: exact exam length and pass threshold for the practice exam; whether a "question of the day" or other passive-review mechanic exists beyond flashcards and exam.

## Brand Commitments

- Product name: **flash-card-exam**.
- Voice: a focused study tool for a solo learner. Clear, direct, and instructional — it explains why an answer is right, not just that it is right. No gamified spectacle, no streaks, no confetti, no leaderboards; the learner is preparing for a professional certification, and the product's tone should respect that.
- The interface is English-only.

## Evidence on Hand

- `data-source/AWS Certified Solutions Architect – Associate (SAA-C03) - PART-1.docx.md` through `PART-5.docx.md` — the complete question bank (956 parsed questions, original numbers 1–975 with gaps) with correct answers marked. The authoritative content. Two questions need attention before they can be served: PART-1 Q192 references two missing diagrams and its option A is malformed (`1.` instead of `A.`), and PART-4 Q733 is truncated mid-option-D with no marked answer.
- No testimonials, customer logos, usage metrics, benchmark scores, or press. Future work must not fabricate any of these.
- No brand assets, logo, or photography beyond the default Vite/React scaffold assets in `src/assets/`, which are template placeholders, not product identity.
- No design system exists yet: `src/App.tsx` and `src/App.css` are the unmodified Vite starter template, and `src/index.css` holds the starter's placeholder palette (purple accent, system fonts). There is no incumbent visual world to preserve; the surface is greenfield. Tailwind CSS v4 is wired up, so tokens are the only thing standing between the scaffold and a real system.

## Product Principles

1. **The exam content is the product.** Everything in the interface exists to get a learner closer to answering the next real exam question correctly. UI that does not move that number does not earn its space.
2. **One question at a time, always.** Both modes present a single question with its full scenario text. Never split a scenario across a card, a panel, and a tooltip.
3. **Every answer is explained.** A correct mark alone teaches nothing. Each question must reveal why the marked option is right and why the plausible-looking distractors fail, because AWS exams are built from near-miss distractors.
4. **Progress is visible and local.** The learner can always see what they know, what they are still missing, and what their practice-exam score would be — without creating an account.
5. **Respect the exam's own difficulty.** No assistance during a timed exam that the real exam would not offer; no timer that pressures before the learner is ready.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established yet. Baseline web accessibility (keyboard operation of the flashcard reveal and exam navigation, sufficient contrast, screen-reader-readable question and option text) is expected as a matter of craft, and the self-grading flow must not depend on color alone to signal correct versus incorrect.
