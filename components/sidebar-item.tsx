'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

type Props = {
  label: string
  iconSrc: string
  href: string
}

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  // checks what current pathname we are at
  const pathname = usePathname()
  // console.log(pathname)
  // checks if pathname is equal to href pulled through paramater
  const active = pathname === href

  return (
    <Button
      variant={active ? 'sidebarOutline' : 'sidebar'}
      className='justify-start h-[52px]'
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className='mr-5'
          height={32}
          width={32}
        />
        {label}
      </Link>
    </Button>
  )
}
