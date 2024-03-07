import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/typography/heading'
import ResendVerificationEmail from '@/features/auth/components/resend-verification-email'
import UserEmail from '@/features/auth/components/user-email'
import React from 'react'

function VerifyEmailPage() {
  return (
    <main>
      <Heading variant="card" asChild>
        <h1>Verify your email address</h1>
      </Heading>
      <p className="mb-4">
        Verification email send to: <UserEmail />
      </p>
      <ResendVerificationEmail />
    </main>
  )
}

export default VerifyEmailPage
