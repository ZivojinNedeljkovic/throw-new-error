import Heading from '@/components/ui/typography/heading'
import Divider from '@/features/auth/components/divider'
import SignInForm from '@/features/auth/components/sign-in-form'
import SignInWithGithub from '@/features/auth/components/sign-in-with-github'
import React from 'react'

function SignInPage() {
  return (
    <main>
      <Heading variant="card" asChild>
        <h1>Sign In</h1>
      </Heading>
      <div className="flex flex-col gap-3">
        <SignInForm />
        <Divider />
        <SignInWithGithub />
      </div>
    </main>
  )
}

export default SignInPage
