import { redirect } from 'next/navigation'

import { getUnits, getUserProgress } from '@/db/queries'

import { StickyWrapper } from '@/components/sitcky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { FeedWrapper } from '@/components/feed-wrapper'

import { Unit } from './unit'
import { Header } from './header'

const LearnPage = async () => {
  const userProgressData = getUserProgress()
  const unitsData = getUnits()

  const [userProgress, units] = await Promise.all([userProgressData, unitsData])

  console.log(userProgressData)

  if (
    !userProgress ||
    userProgress.activeCourse === null ||
    userProgress.activeCourse === undefined
  ) {
    redirect('/courses')
  }

  return (
    // test row reverse class remove it later
    <div className='flex flex-row-reverse gap-[48px] px-6 bg-slate-400'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map(unit => (
          <div key={unit.id} className='mb-10'>
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={undefined}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
