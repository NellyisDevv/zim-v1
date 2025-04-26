import { Button } from '@/components/ui/button'

const ButtonsPage = () => {
  return (
    <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
      <Button size={'lg'}>Default</Button>
      <Button variant={'primary'} size={'lg'}>
        Primary
      </Button>
      <Button variant={'primaryOutline'} size={'lg'}>
        Primary Outline
      </Button>
      <Button variant={'secondary'} size={'lg'}>
        Secondary
      </Button>
      <Button variant={'secondaryOutline'} size={'lg'}>
        Secondary Outline
      </Button>
      <Button variant={'danger'} size={'lg'}>
        Dagner
      </Button>
      <Button variant={'dangerOutline'} size={'lg'}>
        Danger Outline
      </Button>
      <Button variant={'super'} size={'lg'}>
        Super
      </Button>
      <Button variant={'superOutline'} size={'lg'}>
        Super Outline
      </Button>
      <Button variant={'ghost'} size={'lg'}>
        Ghost
      </Button>
      <Button variant={'sidebar'} size={'lg'}>
        Sidebar
      </Button>
      <Button variant={'sidebarOutline'} size={'lg'}>
        Sidebar Outline
      </Button>
    </div>
  )
}

// for routing to work page needs to be named page.tsx

export default ButtonsPage
