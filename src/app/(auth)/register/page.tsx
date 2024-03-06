import SignUpForm from '@/features/auth/components/sign-up-form'
import React from 'react'

function SignUpPage() {
  return (
    <main>
      <div className="rounded-md shadow-md w-11/12 mx-auto max-w-md mt-10 border py-7 px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-center mb-4">
          Create an account
        </h1>
        <SignUpForm />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage
