import { useMemo, useState } from 'react'
import { ChevronLeft, Play } from 'lucide-react'
import type { ExamConfig, Question } from '../../lib/types'
import { DEFAULT_EXAM_CONFIG } from '../../lib/store'
import { Button } from '../../components/ui/Button'
import { Field, NumberInput } from '../../components/ui/Field'

type Props = {
  questions: Question[]
  /** The setup the learner used last time, if any. */
  remembered: ExamConfig
  onStart: (config: ExamConfig) => void
  onExit: () => void
}

/**
 * The exam setup screen. Four fields, a computed summary of what the run
 * will be, and the last run pre-filled so a returning learner starts from
 * where they left off.
 */
export function ExamSetup({ questions, remembered, onStart, onExit }: Props) {
  const [config, setConfig] = useState<ExamConfig>(remembered)

  const set = (patch: Partial<ExamConfig>) => setConfig((prev) => ({ ...prev, ...patch }))

  const total = config.scoredCount + config.surveyCount
  const available = questions.length

  const summary = useMemo(() => {
    const totalMinutes = config.durationMinutes + config.extraMinutes
    const questionCount = config.scoredCount + config.surveyCount
    const perQuestion = questionCount > 0 ? totalMinutes / questionCount : 0
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    const time = hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`
    return { totalMinutes, perQuestion, time }
  }, [config])

  const problems: string[] = []
  if (total > available) problems.push(`The bank holds ${available} questions.`)
  if (total < 1) problems.push('An exam needs at least one question.')

  return (
    <div className="min-h-svh bg-canvas">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Button variant="ghost" size="sm" onClick={onExit} icon={<ChevronLeft className="size-4" />}>
            Home
          </Button>
          <h1 className="text-base font-semibold text-ink">Practice exam</h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (problems.length === 0) onStart(config)
          }}
          className="flex flex-col gap-8"
        >
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-ink">Exam length</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Scored questions" hint="These count toward your score.">
                {(id) => (
                  <NumberInput
                    id={id}
                    min={1}
                    max={available}
                    value={config.scoredCount}
                    onChange={(e) => set({ scoredCount: Number(e.target.value) })}
                  />
                )}
              </Field>
              <Field label="Survey questions" hint="Asked, but excluded from your score.">
                {(id) => (
                  <NumberInput
                    id={id}
                    min={0}
                    max={available}
                    value={config.surveyCount}
                    onChange={(e) => set({ surveyCount: Number(e.target.value) })}
                  />
                )}
              </Field>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-ink">Time</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Duration in minutes" hint="The exam length before extra time.">
                {(id) => (
                  <NumberInput
                    id={id}
                    min={1}
                    max={600}
                    value={config.durationMinutes}
                    onChange={(e) => set({ durationMinutes: Number(e.target.value) })}
                  />
                )}
              </Field>
              <Field label="Extra time in minutes" hint="Added to the total duration.">
                {(id) => (
                  <NumberInput
                    id={id}
                    min={0}
                    max={120}
                    value={config.extraMinutes}
                    onChange={(e) => set({ extraMinutes: Number(e.target.value) })}
                  />
                )}
              </Field>
            </div>
          </section>

          <section className="rounded-md border border-line bg-surface p-4">
            <h2 className="text-sm font-semibold text-ink">This run</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              {total} questions in total: {config.scoredCount} count toward the score and{' '}
              {config.surveyCount} are asked as a survey. The run lasts {summary.time}, which is{' '}
              {summary.perQuestion.toFixed(1)} minutes per question. The questions are drawn from the
              bank in random order.
            </p>
            {problems.length > 0 && (
              <p className="mt-3 text-sm text-bad">{problems.join(' ')}</p>
            )}
          </section>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={<Play className="size-4" />}
              disabled={problems.length > 0}
            >
              Start exam
            </Button>
            <Button
              variant="ghost"
              onClick={() => setConfig({ ...DEFAULT_EXAM_CONFIG })}
            >
              Reset to defaults
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
