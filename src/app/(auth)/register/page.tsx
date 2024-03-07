import SignInWithGithub from '@/features/auth/components/sign-in-with-github'
import React from 'react'
import Divider from '@/features/auth/components/divider'
import SignUpForm from '@/features/auth/components/sign-up-form'
import Heading from '@/components/ui/typography/heading'

function SignUpPage() {
  return (
    <main>
      <Heading variant="card" asChild>
        <h1>Create an account</h1>
      </Heading>
      <div className="flex flex-col gap-3">
        <SignUpForm />
        <Divider />
        <SignInWithGithub />
      </div>
    </main>
  )
}

export default SignUpPage
