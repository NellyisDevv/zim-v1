import { cache } from 'react'
import db from '@/db/drizzle'

// allows us to getCourses without having to pass the props every time in page.tsx for courses page
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany()

  return data
})
