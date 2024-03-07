'use client'
import { cn } from '@/lib/utils'
import { type ClassValue } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ComponentProps } from 'react'

type Props = ComponentProps<typeof Link> & {
  activeClassNames: ClassValue
}

function AppLink({ activeClassNames, ...props }: Props) {
  const pathname = usePathname()

  const isActive = pathname === props.href
  return (
    <Link
      {...props}
      className={cn(props.className, isActive && activeClassNames)}
    />
  )
}

export default AppLink
