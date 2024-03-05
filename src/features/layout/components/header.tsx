import { CubeIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'
import MobileNavMenu from './mobile-nav-menu'
import Logo from '@/components/logo'

function Header() {
  return (
    <header className="px-4 py-1 border-b flex items-center justify-between">
      <Logo />

      <div>
        <MobileNavMenu />
      </div>
    </header>
  )
}

// function MobileNavigation

export default Header
