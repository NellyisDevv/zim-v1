import { redirect } from 'next/navigation'

import { getUserProgress } from '@/db/queries'

import { StickyWrapper } from '@/components/sitcky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { FeedWrapper } from '@/components/feed-wrapper'

import { Header } from './header'

const LearnPage = async () => {
  const userProgressData = getUserProgress()

  const [userProgress] = await Promise.all([userProgressData])

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
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
