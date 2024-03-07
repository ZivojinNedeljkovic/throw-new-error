'use client'
import { Button } from '@/components/ui/button'
import { selectUserEmail } from '@/features/user/store/user-slice'
import { useAppSelector } from '@/lib/redux/hooks'
import React from 'react'

function UserEmail() {
  const email = useAppSelector(selectUserEmail) ?? 'test@gmail.com'

  if (email === null) throw new Error('User email is null')

  return (
    <Button variant="link" className="p-0 text-base h-auto" asChild>
      <a href={`mailto:${email}`} className="">
        {email}
      </a>
    </Button>
  )
}

export default UserEmail
