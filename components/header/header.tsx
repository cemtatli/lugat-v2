import React from 'react'
import Navbar from './navbar'
import Logo from './logo'

const Header = () => {
  return (
    <header className='h-14 flex items-center justify-between border-b '>
      <div className='container flex items-center justify-between'>
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header