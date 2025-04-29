import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Sidebar } from '@/components/sidebar'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden' // Import this if available

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-white' />
      </SheetTrigger>
      <SheetContent className='p-0 z-[100]' side='left'>
        <VisuallyHidden>
          <SheetTitle>Sidebar Navigation</SheetTitle>
          <SheetDescription>Sidebar is now open</SheetDescription>
        </VisuallyHidden>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

/*

Notes:

1. VisuallyHidden hides SheetTitle and SheetDescription which is needed for accessibility
2. 

*/
