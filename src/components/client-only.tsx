'use client'
import React, { useLayoutEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

function ClientOnly({ children }: Props) {
  const [isOnClient, setIsOnClient] = useState(false)
  useLayoutEffect(() => {
    setIsOnClient(true)
  }, [])
  return isOnClient ? <>{children}</> : null
}

export default ClientOnly
