'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { selectProfilePhoto } from '@/features/user/store/user-slice'
import { useAppSelector } from '@/lib/redux/hooks'
import { PersonIcon } from '@radix-ui/react-icons'
import React from 'react'

function UserAvatar() {
  const imageUrl = useAppSelector(selectProfilePhoto)
  return (
    <Avatar className="">
      {imageUrl && <AvatarImage src={imageUrl} />}
      <AvatarFallback>
        <PersonIcon className="w-1/2 h-1/2" />
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
