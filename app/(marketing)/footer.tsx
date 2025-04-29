import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
      <div className='lg:max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image
            src='/fr.svg'
            alt='France'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          France
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image
            src='/us.svg'
            alt='United States'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          English
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image
            src='/co.svg'
            alt='Colombia'
            height={32}
            width={40}
            className='mr-4 rounded-md'
          />
          Spanish
        </Button>
      </div>
    </div>
  )
}
