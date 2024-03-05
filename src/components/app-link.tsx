'use client'
import { type ClassValue } from 'clsx'
import clsx from 'clsx/lite'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<typeof Link> & {
  activeClassNames: ClassValue
}

function AppLink({ activeClassNames, ...props }: Props) {
  const pathname = usePathname()
  const isActive = pathname === props.href
  return (
    <Link
      {...props}
      className={twMerge(clsx(props.className, isActive && activeClassNames))}
    />
  )
}

export default AppLink
