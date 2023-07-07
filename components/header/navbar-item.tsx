import React from 'react'
import Link from 'next/link'
import { Separator } from '../ui/separator'

const NavbarItem = () => {
  return (
    <span className='flex items-center space-x-4 h-5'>
      <Link href={'https://github.com/cemtatli'} target='_blank'> <svg viewBox="0 0 16 16" className="w-5 h-5 cursor-pointer opacity-60 hover:opacity-100 transition-colors fill-primary" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
      </Link>
      <Separator orientation="vertical" />
      <Link href={'https://github.com/cemtatli'} target='_blank'> <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 cursor-pointer opacity-60 hover:opacity-100 transition-colors fill-primary" viewBox="0 0 24 24" fill="none" stroke="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
      </Link>
    </span>
  )
}

export default NavbarItem