import { Button } from '@/components/ui/button'
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
Loader
ClerkLoading
import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-w-[988px]  mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 bg-zinc-500'>
      <div className='relative w-[240px] h-[240px] lg:w-[324px] lg:h-[324px] mb-8 lg:mb-0 bg-zinc-400'>
        <Image src='/hippo.png' fill alt='Hero' />
      </div>
      <div className=' flex flex-col items-center gap-y-8 bg-zinc-300'>
        <h1 className='text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center'>
          Learn, practice, and master new languages with Lingo.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton>
                <Button size='lg' variant='secondary' className='w-full'>
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <SignInButton>
                <Button>Your In!</Button>
              </SignInButton>
            </SignedIn>
            {/* <SignedOut>
              <SignUpButton>
                <Button>Get Started</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedIn> */}
          </ClerkLoaded>
        </div>
      </div>
    </div>

    /*
    <div className='flex flex-col gap-4 justify-center items-center m-auto h-screen'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <h1 className='text-xl font-bold text-rose-500/80'>
          This is a marketing page
        </h1>
        <p>Learn more about this app</p>
        <Button size={'lg'}>Button</Button>
        <div className='pb-10 pt-10'>
          <Button variant='default' size={'lg'} className=''>
            Testing
          </Button>
        </div>
      </div>
    </div>
    */
  )
}
