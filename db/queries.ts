import { cache } from 'react'
import { eq } from 'drizzle-orm'
import { auth } from '@clerk/nextjs/server'

import db from '@/db/drizzle'
import { courses, userProgress } from '@/db/schema'

export const getUserProgress = cache(async () => {
  const { userId } = await auth()

  // console.log('User ID from Clerk:', userId) // Check if userId is being retrieved

  if (!userId) {
    return null
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  })

  // console.log(data)
  return data
})

// allows us to getCourses without having to pass the props every time in page.tsx for courses page
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany()

  return data
})

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // TODO: populate units and lessons
  })

  return data
})
