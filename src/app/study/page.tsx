'use client'

import { useProgress } from '@/features/app/ProgressProvider'
import { StudyView } from '@/features/study/StudyView'
import { LoadingScreen } from '@/components/LoadingScreen'

/** Study mode. */
export default function StudyPage() {
  const { questions, study, updateStudy, loading } = useProgress()

  if (loading && questions.length === 0) {
    return <LoadingScreen />
  }

  return (
    <StudyView
      questions={questions}
      state={study}
      onStateChange={updateStudy}
    />
  )
}
