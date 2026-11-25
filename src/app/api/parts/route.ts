import { NextResponse } from 'next/server'
import { getParts } from '@/lib/questions'

/** The parts the bank is split into, with how many questions each holds. */
export async function GET() {
  const parts = await getParts()
  return NextResponse.json({ parts })
}
