import SignInWithGithub from '@/features/auth/components/sign-in-with-github'
import EmailAndPasswordSignUpForm from '@/features/auth/components/email-and-password-sign-up-form'
import React from 'react'
import SignUpForm from '@/features/auth/components/sign-up-form'

function SignUpPage() {
  return (
    <main>
      <div className="rounded-md shadow-md w-11/12 mx-auto max-w-md mt-10 border py-7 px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-center mb-4">
          Create an account
        </h1>
        <SignUpForm />
      </div>
    </main>
  )
}

export default SignUpPage
