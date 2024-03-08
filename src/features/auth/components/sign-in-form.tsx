'use client'
import { Form } from '@/components/ui/form'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import EmailField from './email-field'
import PasswordField from './password-field'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '@/lib/redux/hooks'
import thunkSignInUserWithEmailAndPassword from '@/features/store/thunk-sign-in-user-with-email-and-password'
import SpinnerIcon from '@/components/ui/icons/spinner-icon'
import Paragraph from '@/components/ui/typography/paragraf'

function SignInForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useAppDispatch()

  const onSubmit = form.handleSubmit(async ({ email, password }) => {
    setIsLoading(true)
    try {
      await dispatch(thunkSignInUserWithEmailAndPassword(email, password))
    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          form.setError('email', {
            message: 'User not found.',
          })
          break
        case 'auth/wrong-password':
          form.setError('password', { message: 'Wrong password.' })
          break
        default:
          form.setError('root', {
            message: 'Unexpected error occurred.',
          })
          break
      }
    }
    setIsLoading(false)
  })

  const rootError = form.formState.errors.root?.message

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <EmailField />
        <PasswordField />
        {rootError && (
          <Paragraph variant="error" className="m-0">
            {rootError}
          </Paragraph>
        )}
        <Button className="w-full mt-1" type="submit" disabled={isLoading}>
          {isLoading && <SpinnerIcon />}
          Sing in
        </Button>
      </form>
    </Form>
  )
}

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

export default SignInForm
