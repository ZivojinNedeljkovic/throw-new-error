import React from 'react'
import EmailAndPasswordSignUpForm from './email-and-password-sign-up-form'
import Divider from './divider'
import SignInWithGithub from './sign-in-with-github'

function SignUpForm() {
  return (
    <div className="flex flex-col gap-3">
      <EmailAndPasswordSignUpForm />
      <Divider />
      <SignInWithGithub />
    </div>
  )
}

export default SignUpForm
