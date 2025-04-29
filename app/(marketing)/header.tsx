import Image from 'next/image'
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'

const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200'>
      <div className=' mx-auto flex items-center justify-between h-full lg:max-w-screen-lg'>
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image src='/parrot.png' height={40} width={40} alt='Mascot' />
          <h1 className='font-extrabold text-2xl text-red-600 tracking-wide'>
            Zim
          </h1>
        </div>

        <ClerkLoading>
          <Loader className='h-5 w-5 text-red-300/80 animate-spin' />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <UserButton
            // after user sings out goto URL / or home
            // depriciated its now moved to <ClerkProvider />
            // afterSignOutUrl='/'
            />
          </SignedIn>

          <SignedOut>
            <SignInButton
              mode='modal'
              // after user signs in redirect to this URL
              forceRedirectUrl='/learn'
              // after user sings up redirect to this URL
              signUpForceRedirectUrl='/learn'
            >
              <Button size='lg' variant='ghost'>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  )
}

export default Header
