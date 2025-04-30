import { cache } from 'react'
import { eq } from 'drizzle-orm'
import { auth } from '@clerk/nextjs/server'

import db from '@/db/drizzle'
import { userProgress } from '@/db/schema'

export const getUserProgress = cache(async () => {
  const { userId } = await auth()

  if (!userId) {
    return null
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  })

  return data
})

// allows us to getCourses without having to pass the props every time in page.tsx for courses page
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany()

  return data
})
