'use client'
import React from 'react'
import MobileNavMenu from './mobile-nav-menu'
import Logo from '@/components/logo'
import UserAvatar from './user-avatar'
import { useAppSelector } from '@/lib/redux/hooks'
import { selectIsSignedIn } from '@/features/user/store/user-slice'

function Header() {
  const isSignedIn = useAppSelector(selectIsSignedIn)

  return (
    <header className="px-4 py-1 border-b flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-4">
        {isSignedIn && <UserAvatar />}
        <MobileNavMenu />
      </div>
    </header>
  )
}

export default Header
