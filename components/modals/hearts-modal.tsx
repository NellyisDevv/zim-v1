'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useHeartsModal } from '@/store/use-hearts-modal'

export const HeartsModal = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { isOpen, close } = useHeartsModal()

  useEffect(() => setIsClient(true), [])

  const onClick = () => {
    close()
    router.push('/store')
  }

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <div className='flex items-center w-full justify-center mb-5'>
            <Image src='/rabbit.png' alt='Mascot' height={80} width={80} />
          </div>
          <DialogTitle className='text-center font-bold text-2xl'>
            You ran out of hearts!
          </DialogTitle>
          <DialogDescription className='text-center text-base pb-2'>
            Get Pro for unlimited hearts, or purchase them in the store.
          </DialogDescription>
          <DialogFooter className='mb-4'>
            <div className='flex flex-col gap-y-3 w-full'>
              <Button
                variant='primary'
                className='w-full'
                size='lg'
                onClick={onClick}
              >
                Get unlimited hearts
              </Button>
              <Button
                variant='primaryOutline'
                className='w-full'
                size='lg'
                onClick={close}
              >
                No thanks
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
