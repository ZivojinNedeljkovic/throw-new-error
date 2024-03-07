'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

function ResendVerificationEmail() {
  const resendHandler = async () => {
    const sendEmail = (await import('@/lib/firebase/send-email-verification'))
      .default
    try {
      sendEmail()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <Button variant="secondary" onClick={resendHandler}>
      Resend
    </Button>
  )
}

export default ResendVerificationEmail
