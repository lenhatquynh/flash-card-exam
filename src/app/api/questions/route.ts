import { NextResponse } from 'next/server'
import { getAllQuestions } from '@/lib/questions'

/**
 * The question bank.
 *
 * The whole bank is served in one request because both study mode and exam
 * mode need to browse all of it. `?part=` narrows the answer to one part and
 * `?page=` / `?limit=` slice it, for clients that want less.
 */
export async function GET(request: Request) {
  const url = new URL(request.url)
  const part = url.searchParams.get('part')
  const pageParam = url.searchParams.get('page')
  const limitParam = url.searchParams.get('limit')

  const all = await getAllQuestions()
  const filtered = part ? all.filter((q) => q.part === part) : all

  if (!pageParam && !limitParam) {
    return NextResponse.json({ total: filtered.length, questions: filtered })
  }

  const page = Math.max(1, Number(pageParam) || 1)
  const limit = Math.min(500, Math.max(1, Number(limitParam) || 50))
  const start = (page - 1) * limit

  return NextResponse.json({
    total: filtered.length,
    page,
    limit,
    questions: filtered.slice(start, start + limit),
  })
}
