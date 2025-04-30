import { StickyWrapper } from '@/components/sitcky-wrapper'
import { UserProgress } from '@/components/user-progress'
import { FeedWrapper } from '@/components/feed-wrapper'
import { Header } from './header'

const LearnPage = () => {
  return (
    // test row reverse class remove it later
    <div className='flex flex-row-reverse gap-[48px] px-6 bg-slate-400'>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'French', imageSrc: '/fr.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title='Spanish' />
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
