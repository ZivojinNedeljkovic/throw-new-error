import SignInWithGithub from '@/features/auth/components/sign-in-with-github'
import React from 'react'
import Divider from '@/features/auth/components/divider'
import SignUpForm from '@/features/auth/components/sign-up-form'

function SignUpPage() {
  return (
    <main>
      <div className="rounded-md shadow-md w-11/12 mx-auto max-w-md mt-10 border py-7 px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-center mb-4">
          Create an account
        </h1>
        <div className="flex flex-col gap-3">
          <SignUpForm />
          <Divider />
          <SignInWithGithub />
        </div>
      </div>
    </main>
  )
}

export default SignUpPage
