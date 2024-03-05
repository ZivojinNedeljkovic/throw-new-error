import React from 'react'
import MobileNavMenu from './mobile-nav-menu'
import Logo from '@/components/logo'

function Header() {
  return (
    <header className="px-4 py-1 border-b flex items-center justify-between">
      <Logo />

      <div className="md:hidden">
        <MobileNavMenu />
      </div>
    </header>
  )
}

export default Header
